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
    /// Interaction logic for IncidentDetailsPage.xaml
    /// </summary>
    public partial class IncidentDetailsPage : Page
    {
        private Incident _incident;
        public IncidentDetailsPage(Incident incident)
        {
            InitializeComponent();
            _incident = incident;
            DataContext = _incident;
            LoadFullData();
        }

        private async void LoadFullData()
        {
            try
            {
                var fullIncident = await ApiHelper.GetAsync<Incident>($"/incidents/{_incident.Id}");

                // Update existing collections
                _incident.Comments.Clear();
                foreach (var comment in fullIncident.Comments)
                    _incident.Comments.Add(comment);

                _incident.EmergencyResponses.Clear();
                foreach (var response in fullIncident.EmergencyResponses)
                    _incident.EmergencyResponses.Add(response);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading details: {ex.Message}");
            }
        }

            private async void AddResponse_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtEmergencyResponse.Text))
            {
                MessageBox.Show("Emergency Response cannot be empty");
                return;
            }
            var response = await ApiHelper.PostAsync<EmergencyResponse>($"/incidents/{_incident.Id}/emergency-responses", new {message = txtEmergencyResponse.Text } );
            _incident.EmergencyResponses.Add(response);
            txtEmergencyResponse.Text = "";
        }

        private async void AddComment_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtComment.Text))
            {
                MessageBox.Show("Comment cannot be empty");
                return;
            }

            var comment = await ApiHelper.PostAsync<Comment>(
                $"/incidents/{_incident.Id}/comments",
                new
                {
                    content = $"(admin) - {txtComment.Text}",  
                    isAdmin = true
                }
            );
            _incident.Comments.Add(comment);
            txtComment.Text = "";
        }

        private async void DeleteResponse_Click(object sender, RoutedEventArgs e)
        {
            if (((FrameworkElement)sender).DataContext is EmergencyResponse response)
            {
                await ApiHelper.DeleteAsync($"/emergency-responses/{response.Id}");
                _incident.EmergencyResponses.Remove(response);
            }
        }

        private async void DeleteComment_Click(object sender, RoutedEventArgs e)
        {
            if (((FrameworkElement)sender).DataContext is Comment comment)
            {
                await ApiHelper.DeleteAsync($"/comments/{comment.Id}");
                _incident.Comments.Remove(comment);
            }
        }
    }
}
