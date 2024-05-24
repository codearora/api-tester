// Import the axios library
const axios = require('axios');

// Define the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to test API connectivity
async function testApiConnectivity() {
    try {
        // Send a GET request to the API
        const response = await axios.get(apiUrl);

        // Log the response data
        console.log('Response data:', response.data);
    } catch (error) {
        // Log any errors that occur
        console.error('Error connecting to the API:', error.message);
    }
}

// Execute the function
testApiConnectivity();
