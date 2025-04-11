// netlify/functions/myApi.js
exports.handler = async function(event, context) {
    const apiKey = process.env.MY_API_KEY; // Store your API key in Netlify environment variables
    const response = await fetch(`https://api.example.com/data?apikey=${apiKey}`);
    const data = await response.json();
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  