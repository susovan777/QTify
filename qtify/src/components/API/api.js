import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

// export const fetchNewAlbums = async () => {
//     try {
//         const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
//         console.log(response.data);
//         return response.data;
//       } catch (err) {
//         return err;
//       }
// }