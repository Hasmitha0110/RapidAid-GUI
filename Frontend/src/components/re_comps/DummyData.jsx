const DummyData = [
  {
      id: 1,
      type: 'Floods',
      district: 'Galle',
      location: 'Wakwalla',
      date: '2025-01-09',
      description: 'Heavy floods due to continuous rain.',
      affectedCount: 32,
      status: 'Inactive'
  },
  {
      id: 2,
      type: 'Wildfire',
      district: 'Matara',
      location: 'Godagama',
      date: '2025-01-08',
      description: 'Wildfire in a nearby forest.',
      affectedCount: 19,
      status: 'Inactive'
  },
  {
      id: 3,
      type: 'Earthquakes',
      district: 'Kandy',
      location: 'Peradeniya',
      date: '2025-01-07',
      description: 'Minor earthquake with aftershocks.',
      affectedCount: 10,
      status: 'Inactive'
  },
  {
      id: 4,
      type: 'Landslide',
      district: 'Nuwara Eliya',
      location: 'Hatton',
      date: '2025-01-06',
      description: 'Landslide due to heavy rain.',
      affectedCount: 25,
      status: 'Active'
  },
  {
      id: 5,
      type: 'Hurricane',
      district: 'Colombo',
      location: 'Negombo',
      date: '2025-01-10',
      description: 'Hurricane approaching the coastal areas.',
      affectedCount: 50,
      status: 'Active'
  },
  {
      id: 6,
      type: 'Floods',
      district: 'Hambantota',
      location: 'Tangalle',
      date: '2025-01-12',
      description: 'Floods due to overflowing rivers.',
      affectedCount: 40,
      status: 'Active'
  },
  {
      id: 7,
      type: 'Earthquakes',
      district: 'Kurunegala',
      location: 'Maho',
      date: '2025-01-14',
      description: 'Strong earthquake with noticeable tremors.',
      affectedCount: 15,
      status: 'Active'
  },
  {
      id: 8,
      type: 'Criminal Activities',
      district: 'Jaffna',
      location: 'Point Pedro',
      date: '2025-01-11',
      description: 'Increase in criminal activities in the area.',
      affectedCount: 12,
      status: 'Inactive'
  },
  {
      id: 9,
      type: 'Floods',
      district: 'Kalutara',
      location: 'Beruwala',
      date: '2025-01-13',
      description: 'Floods due to heavy rains causing rivers to overflow.',
      affectedCount: 55,
      status: 'Active'
  },
  {
      id: 10,
      type: 'Building Collapse',
      district: 'Badulla',
      location: 'Rathnapura',
      date: '2025-01-05',
      description: 'Building collapse due to structural failure.',
      affectedCount: 22,
      status: 'Inactive'
  },
  {
      id: 11,
      type: 'Landslide',
      district: 'Matale',
      location: 'Dambulla',
      date: '2025-01-03',
      description: 'Landslide caused by excessive rainfall.',
      affectedCount: 30,
      status: 'Inactive'
  },
  {
      id: 12,
      type: 'Other',
      district: 'Trincomalee',
      location: 'Muttur',
      date: '2025-01-15',
      description: 'Miscellaneous emergency situation reported.',
      affectedCount: 70,
      status: 'Active',
      otherDisaster: 'Toxic Gas Leak'
  },
  {
    id: 13,
    type: 'Other',
    district: 'Kalutara',
    location: 'Bandaragama',
    date: '2025-01-16',
    description: 'Miscellaneous emergency situation reported.',
    affectedCount: 50,
    status: 'Active',
    otherDisaster: 'Bus toppled on the highway'
},

];

 DummyData.forEach(incident => {
     if (incident.type === 'Other') {
       incident.type = incident.otherDisaster;
    }
 });

export default DummyData;
