using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace RapidAid_Desktop_App
{
    /// <summary>
    /// Interaction logic for ActiveIncidentsPage.xaml
    /// </summary>
    /// 


    public partial class ActiveIncidentsPage : Page
    {
        public ObservableCollection<Incident> Incidents { get; set; } = new ObservableCollection<Incident>();

        public ActiveIncidentsPage()
        {
            InitializeComponent();
            DataContext = this;
            LoadIncidents();
        }

        private async void LoadIncidents()
        {
            try
            {
                var incidents = await ApiHelper.GetAsync<List<Incident>>("/incidents?status=Active");
                Incidents.Clear();
                foreach (var incident in incidents)
                {
                    Incidents.Add(incident);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading incidents: {ex.Message}");
            }
        }

        private async void DeleteIncident_Click(object sender, RoutedEventArgs e)
        {
            if (((FrameworkElement)sender).DataContext is Incident incident)
            {
                try
                {
                    await ApiHelper.DeleteAsync($"/incidents/{incident.Id}");
                    Incidents.Remove(incident); 
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Error deleting incident: {ex.Message}");
                }
            }
        }

        private async void ToggleStatus_Click(object sender, RoutedEventArgs e)
        {
            if (((FrameworkElement)sender).DataContext is Incident incident)
            {
                try
                {
                    var newStatus = incident.Status == "Active" ? "Inactive" : "Active";
                    var updatedIncident = await ApiHelper.PatchAsync<Incident>($"/incidents/{incident.Id}/status", new { status = newStatus });

                   
                    var index = Incidents.IndexOf(incident);
                    Incidents[index] = updatedIncident;
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Error updating status: {ex.Message}");
                }
            }
        }

        private void IncidentCard_Click(object sender, MouseButtonEventArgs e)
        {
            if (sender is Border border && border.DataContext is Incident incident)
            {
                var detailsPage = new IncidentDetailsPage(incident);
                NavigationService?.Navigate(detailsPage);
            }
        }
    }
}