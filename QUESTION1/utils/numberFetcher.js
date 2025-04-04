const axios = require('axios');

// Replace with your real token
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ1ODE0LCJpYXQiOjE3NDM3NDU1MTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkZGI2OGMwLTA1MDQtNDhiZS1iZjZjLTAxYjliYTliZDk3MyIsInN1YiI6ImUyMmNzZXUxNDk4QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE0OThAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoibWF5YW5rIGJhbnNhbCIsInJvbGxObyI6ImUyMmNzZXUxNDk4IiwiYWNjZXNzQ29kZSI6InJ0Q0haSiIsImNsaWVudElEIjoiY2RkYjY4YzAtMDUwNC00OGJlLWJmNmMtMDFiOWJhOWJkOTczIiwiY2xpZW50U2VjcmV0IjoiRHhEckJZWFNldmRkS01OaiJ9.1HwHZ5giPoLJ954IYs1vbmnkuGyqA5cnveREnBy1BOw";

const fetchNumbers = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: TOKEN },
      timeout: 5000
    });
    return response.data.numbers || [];
  } catch (err) {
    console.warn("Error or timeout in fetching", err.message);
    return [];
  }
};

module.exports = fetchNumbers;
