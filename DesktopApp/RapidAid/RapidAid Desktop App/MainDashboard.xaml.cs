using System;
using System.Collections.Generic;
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
using System.Windows.Shapes;

namespace RapidAid_Desktop_App
{
    /// <summary>
    /// Interaction logic for MainDashboard.xaml
    /// </summary>
    public partial class MainDashboard : Window
    {
        public MainDashboard(string username)
        {
            InitializeComponent();

            txtWelcome.Text = $"Welcome, {username} (admin)!";

            MainContentFrame.Navigate(new ActiveIncidentsPage());
        }

        private void btnBack_Click(object sender, RoutedEventArgs e)
        {
            if (MainContentFrame.CanGoBack)
                MainContentFrame.GoBack();
        }

        private void ActiveIncidents_Click(object sender, RoutedEventArgs e)
        {
            MainContentFrame.Navigate(new ActiveIncidentsPage());
        }

        private void PastIncidents_Click(object sender, RoutedEventArgs e)
        {
            MainContentFrame.Navigate(new PastIncidentsPage());
        }

        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            LoginWindow loginWindow = new LoginWindow();
            loginWindow.Show();
            this.Close();
        }
    }
}
