// apiService.js
import axios from 'axios';

const API_KEY = 'a623a1c604mshf0c3c388f31fb13p1d6a2ajsn3a94cb326a55';
const BASE_URL = 'https://youtube-search-and-download.p.rapidapi.com';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Rapidapi-Key': API_KEY,
    'X-Rapidapi-Host': 'youtube-search-and-download.p.rapidapi.com'
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
