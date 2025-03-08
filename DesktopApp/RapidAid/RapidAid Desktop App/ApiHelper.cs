using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace RapidAid_Desktop_App
{
    public static class ApiHelper
    {
        private static readonly HttpClient client = new HttpClient();
        private const string BaseUrl = "http://localhost:4000";


        public static async Task<T> GetAsync<T>(string endpoint)
        {
            var response = await client.GetAsync($"{BaseUrl}{endpoint}");
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(content);
        }


        public static async Task<T> PostAsync<T>(string endpoint, object data)
        {
            try
            {
                var json = JsonConvert.SerializeObject(data);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await client.PostAsync($"{BaseUrl}{endpoint}", content);

                response.EnsureSuccessStatusCode();

                return JsonConvert.DeserializeObject<T>(await response.Content.ReadAsStringAsync());
            }
            catch (HttpRequestException ex)
            {
                throw new Exception($"API request failed: {ex.Message}");
            }
        }

        public static async Task<T> PatchAsync<T>(string endpoint, object data)
        {
            var json = JsonConvert.SerializeObject(data);
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            var request = new HttpRequestMessage(new HttpMethod("PATCH"), $"{BaseUrl}{endpoint}")
            {
                Content = content
            };
            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();
            return JsonConvert.DeserializeObject<T>(await response.Content.ReadAsStringAsync());
        }

        public static async Task ToggleIncidentStatus(int incidentId, string newStatus)
        {
            await PatchAsync<object>($"/incidents/{incidentId}/status", new { status = newStatus });
        }

        // Delete incident
        public static async Task DeleteIncident(int incidentId)
        {
            await DeleteAsync($"/incidents/{incidentId}");
        }

        public static async Task DeleteAsync(string endpoint)
        {
            var response = await client.DeleteAsync($"{BaseUrl}{endpoint}");
            response.EnsureSuccessStatusCode();
        }


    }
}
