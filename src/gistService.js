const axios = require('axios'); //axios library for HTTP request
const config = require('../config'); //config Setting
require('dotenv').config(); // Load environment variables from a .env file into process.env

const API_BASE_URL = config.API_BASE_URL;
// Include GitHub API token
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
// Add authorization header
const axiosInstance = axios.create({
  headers: GITHUB_API_TOKEN ? { Authorization: `Bearer ${GITHUB_API_TOKEN}`, 'Content-Type': 'application/json' } : {},
});
async function createGist(gistData) {
  return await axiosInstance.post(API_BASE_URL, gistData); // Make a POST request to the GitHub Gists API with the provided data
}
async function getGist(gistId) {
  // Construct the URL for retrieving a specific Gist
  const url = `${API_BASE_URL}/${gistId}`;
  // Make a GET request to the constructed URL
  return await axiosInstance.get(url);
}
// Function to edit the content of an existing Gist
async function editGist(gistId, gistData) {
  const url = `${API_BASE_URL}/${gistId}`;
  return await axiosInstance.patch(url, gistData);  // Make a PATCH request to the constructed URL with the updated data
}
async function deleteGist(gistId) {
  const url = `${API_BASE_URL}/${gistId}`;
  return await axiosInstance.delete(url);
}
//Export the functions
module.exports = {
  createGist,
  getGist,
  editGist,
  deleteGist,
};
