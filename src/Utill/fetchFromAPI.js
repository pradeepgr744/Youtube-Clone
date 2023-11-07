import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':'0e7c2b2bb4msh0cd14b3a0d54877p13e5bbjsn6f8817e4c35e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
  
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};