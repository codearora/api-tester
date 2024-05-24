const axios = require('axios');

// Replace with your actual API key from the Weather Union website
const apiKey = '-';

// Replace with the desired latitude and longitude
const latitude = 28.555596;
const longitude = 77.345713;

// Define the API endpoint
const apiUrl = `https://weatherunion.com/gw/weather/external/v0/get_weather_data?latitude=${latitude}&longitude=${longitude}`;

async function testWeatherApi() {
    try {
        // Send a GET request to the API
        const response = await axios.get(apiUrl, {
            headers: {
                'content-type': 'application/json',
                'x-zomato-api-key': apiKey
            }
        });

        // Log the response data
        console.log('Response data:', response.data);
    } catch (error) {
        // Log any errors that occur
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Execute the function
testWeatherApi();
