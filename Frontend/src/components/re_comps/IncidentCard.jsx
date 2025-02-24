import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IncidentCard.css';
import IncidentImages from './IncidentImages';

const IncidentCard = ({ incident, onDelete, showStatus = true, showActions = true, readOnlyComments = false }) => {
  const [affectedCount, setAffectedCount] = useState(incident.affectedCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [emergencyResponses, setEmergencyResponses] = useState([]);

  useEffect(() => {
    if (isExpanded) {
      axios.get(`http://localhost:4000/incidents/${incident.id}/comments`)
        .then(response => setComments(response.data))
        .catch(err => console.error('Error fetching comments:', err));

      axios.get(`http://localhost:4000/incidents/${incident.id}/emergency-responses`)
        .then(response => setEmergencyResponses(response.data))
        .catch(err => console.error('Error fetching emergency responses:', err));

        axios.get(`http://localhost:4000/incidents/${incident.id}`)
        .then(response => {
          setAffectedCount(response.data.affectedCount);
          setComments(response.data.comments);
          incident.status = response.data.status; // Update status locally
        })
        .catch(err => console.error('Error fetching updated incident:', err));
    }
  }, [isExpanded, incident.id]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    axios.post(`http://localhost:4000/incidents/${incident.id}/comments`, { content: newComment })
      .then(response => {
        setComments([response.data, ...comments]);
        setNewComment('');
      })
      .catch(err => console.error('Error adding comment:', err));
  };

  const handleDeleteComment = (commentId) => {
    axios.delete(`http://localhost:4000/comments/${commentId}`)
      .then(() => setComments(comments.filter(comment => comment.id !== commentId)))
      .catch(err => console.error('Error deleting comment:', err));
  };

  const handleAffectClick = () => {
    axios.patch(`http://localhost:4000/incidents/${incident.id}/report`)
      .then(() => setAffectedCount(affectedCount + 1))
      .catch(err => console.error('Error updating affected count:', err));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      onDelete(incident.id);
    }
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="incident-card">
      <div className="incident-photo" style={{ backgroundImage: `url(${IncidentImages[incident.type] || IncidentImages.Other})` }}>
        <div className="incident-info">
          <h3 onClick={toggleExpanded} className="clickable-title">
            {incident.type} {isExpanded ? '⮝' : '⮟'}
          </h3>
          <p><strong>Location:</strong> {incident.location}, {incident.district}</p>
          <p><strong>Date:</strong> {new Date(incident.date).toLocaleDateString()}</p>
          <p><strong>Description:</strong> {incident.description}</p>
          <p className="af-count"><strong>Affected People:</strong> {affectedCount}</p>
          {showStatus && (<p><strong>Status:</strong><span style={{ color: "aqua" }}> {incident.status}</span></p>)}
        </div>
      </div>

      {showActions && (
        <div className="incident-actions">
          <button onClick={handleAffectClick}>I'm suffering from the same</button>
          <button onClick={handleDelete} className="delete-btn">Delete Report</button>
        </div>
      )}

      {isExpanded && (
        <>
          {/* Emergency Responses */}
          <div className="emergency-responses">
            <h4>Emergency Team Responses:</h4>
            {emergencyResponses.length > 0 ? (
              <ul>
                {emergencyResponses.map((response) => (
                  <li key={response.id}>{response.message}</li>
                ))}
              </ul>
            ) : (
              <p>No emergency responses yet.</p>
            )}
          </div>

          {/* Comments */}
          <div className="comments-section">
            <h4>Comments:</h4>
            {!readOnlyComments && (
              <>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Add Comment</button>
              </>
            )}

            <ul className="comments-list">
              {comments.map(comment => (
                <li key={comment.id}>
                  {comment.content}
                  {!readOnlyComments && (
                    <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default IncidentCard;
