import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

// fetching top albums
export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// fetching new albums
export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// fetching songs
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// fetching song filters
export const fetchSongFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
