// QUESTION2/services/apiClient.js
const axios = require('axios');

const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ4MTUyLCJpYXQiOjE3NDM3NDc4NTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkZGI2OGMwLTA1MDQtNDhiZS1iZjZjLTAxYjliYTliZDk3MyIsInN1YiI6ImUyMmNzZXUxNDk4QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE0OThAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoibWF5YW5rIGJhbnNhbCIsInJvbGxObyI6ImUyMmNzZXUxNDk4IiwiYWNjZXNzQ29kZSI6InJ0Q0haSiIsImNsaWVudElEIjoiY2RkYjY4YzAtMDUwNC00OGJlLWJmNmMtMDFiOWJhOWJkOTczIiwiY2xpZW50U2VjcmV0IjoiRHhEckJZWFNldmRkS01OaiJ9.SqPXi1GOg8HOt59sJ8sl2iG8KZpTOiXQ7H8ykyK8R04'; // 🔁 replace with your actual token
const BASE_URL = 'http://20.244.56.144/evaluation-service';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

module.exports = apiClient;
