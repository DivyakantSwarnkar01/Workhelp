// apiService.js
import axios from 'axios';

const API_KEY = '';
const BASE_URL = '';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Rapidapi-Key': API_KEY,
    'X-Rapidapi-Host': ''
  }
});

export const fetchVideo = async (videoId) => {
        try {
          const response = await apiService.get(`/video?id=${videoId}`);
          console.log('API Response:', response.data); // Log the entire response data
          return response.data;
        } catch (error) {
          throw error;
        }
      };
      

export default apiService;
