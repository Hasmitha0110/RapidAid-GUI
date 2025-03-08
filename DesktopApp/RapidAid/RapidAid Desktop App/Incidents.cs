using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Collections.ObjectModel;
using System.ComponentModel;

namespace RapidAid_Desktop_App
{
    public class Incident : INotifyPropertyChanged
    {
        public int Id { get; set; }
        public bool IsAdmin { get; set; }
        public string Type { get; set; }
        public string District { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int AffectedCount { get; set; }
        
        private string _status;
        public string Status
        {
            get => _status;
            set
            {
                _status = value;
                OnPropertyChanged(nameof(Status));
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        public string Name { get; set; }        
        public string Contact { get; set; }     
        public bool InjuredOrDead { get; set; } 
        public int? NumInjuredOrDead { get; set; } 
        public ObservableCollection<Comment> Comments { get; set; } = new ObservableCollection<Comment>();
        public ObservableCollection<EmergencyResponse> EmergencyResponses { get; set; } = new ObservableCollection<EmergencyResponse>();


    }
}
