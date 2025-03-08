const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());



app.get('/districts', async (req, res) => {
  try {
    const districts = await prisma.incident.findMany({
      select: { district: true },
      distinct: ['district']
    });
    res.json(districts.map(d => d.district));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch districts' });
  }
});

// ======== INCIDENT ROUTES ======== //


app.get('/incidents', async (req, res) => {
  const { status, district, date, sort } = req.query;

  try {
    const orderBy = {};
    if (sort === 'asc' || sort === 'desc') {
      orderBy.affectedCount = sort;
    } else {
      orderBy.date = 'desc';
    }

    const where = {
      status: status || undefined,
      district: district || undefined,
    };

    

    // Date filtering with range
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(startDate);
      endDate.setUTCDate(startDate.getUTCDate() + 1);

      where.date = {
        gte: startDate,
        lt: endDate
      };
    }
    
    const incidents = await prisma.incident.findMany({
      where,
      include: {
        comments: true,
        emergencyResponses: true
      },
      orderBy
    });

    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching incidents' });
  }
});

app.get('/incidents/:id', async (req, res) => {
  try {
    const incident = await prisma.incident.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        comments: true,
        emergencyResponses: true
      }
    });
    res.json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching incident' });
  }
});


// Create new incident
app.post('/incidents', async (req, res) => {
  const { 
    type, 
    district, 
    location, 
    description, 
    name, 
    contact, 
    injuredOrDead, 
    numInjuredOrDead 
  } = req.body;

  if (!type || !district || !location || !description || !name || !contact) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (injuredOrDead && !numInjuredOrDead) {
    return res.status(400).json({ error: 'Number required for injury/death cases' });
  }

  try {
    const newIncident = await prisma.incident.create({
      data: {
        type,
        district,
        location,
        description,
        status: "Active",
        name,
        contact,
        injuredOrDead: injuredOrDead || false,
        numInjuredOrDead: injuredOrDead ? numInjuredOrDead : null
      }
    });
    res.json(newIncident);
  } catch (error) {
    res.status(500).json({ error: 'Error creating incident' });
  }
});

// Update affected count
app.patch('/incidents/:id/report', async (req, res) => {
  const { id } = req.params;
  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { affectedCount: { increment: 1 } },
  });
  res.json(updated);
});

// Delete incident
app.delete('/incidents/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Delete related comments
      await prisma.comment.deleteMany({
        where: { incidentId: Number(id) }
      });
  
      // Delete related emergency responses
      await prisma.emergencyResponse.deleteMany({
        where: { incidentId: Number(id) }
      });
  
      // Now delete the incident
      await prisma.incident.delete({
        where: { id: Number(id) }
      });
  
      res.json({ message: 'Incident and related data deleted successfully' });
    } catch (error) {
      console.error('Error deleting incident:', error);
      res.status(500).json({ error: 'Failed to delete incident' });
    }
  });

// ================= COMMENTS ROUTES =================

// Get comments for a specific incident
app.get('/incidents/:id/comments', async (req, res) => {
    const { id } = req.params;
    try {
      const comments = await prisma.comment.findMany({
        where: { incidentId: Number(id) },
        orderBy: { createdAt: 'desc' }
      });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching comments' });
    }
  });
  
  // Add a comment to an incident
  app.post('/incidents/:id/comments', async (req, res) => {
    const { content, isAdmin } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Comment content is required' });
    }
  
    try {
      const comment = await prisma.comment.create({
        data: {
          content,
          isAdmin: isAdmin || false,
          incidentId: Number(req.params.id)
        }
      });
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Error creating comment' });
    }
  });
  
  // Delete a comment
  app.delete('/comments/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.comment.delete({ where: { id: Number(id) } });
      res.json({ message: 'Comment deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting comment' });
    }
  });
  
 // ================= EMERGENCY RESPONSES =================

// Get emergency responses for an incident
app.get('/incidents/:id/emergency-responses', async (req, res) => {
    const { id } = req.params;
    try {
      const responses = await prisma.emergencyResponse.findMany({
        where: { incidentId: Number(id) },
        orderBy: { createdAt: 'desc' }
      });
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching emergency responses' });
    }
  });
  
  // Add emergency response (for desktop app)
  app.post('/incidents/:id/emergency-responses', async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
  
    if (!message) return res.status(400).json({ error: 'Response message is required' });
  
    try {
      const response = await prisma.emergencyResponse.create({
        data: {
          message,
          incidentId: Number(id)
        }
      });
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error adding emergency response' });
    }
  });

  app.delete('/emergency-responses/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.emergencyResponse.delete({
        where: { id: Number(id) }
      });
      res.json({ message: 'Response deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting response' });
    }
  });

  // Update Incident Status (Active/Inactive)
app.patch('/incidents/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    if (!['Active', 'Inactive'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Use "Active" or "Inactive".' });
    }
  
    try {
      const updatedIncident = await prisma.incident.update({
        where: { id: Number(id) },
        data: { status }
      });
      res.json(updatedIncident);
    } catch (error) {
      res.status(500).json({ error: 'Error updating incident status' });
    }
  });

  // ======== USER ROUTES ======== //
app.post('/signup', async (req, res) => {
  const { name, username, password, role } = req.body;
  
  try {
    const user = await prisma.user.create({
      data: { name, username, password, role }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Username exists' });
  }
});

// Login user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});
  
  
  

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
