import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainCard from "./components/Card/Card";
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./components/API/api";

function App() {
  const [data, setData] = useState({});

  const generateFetchedData = async (key, source) => {
    try {
      const data = await source();
      setData((prevState) => {
        return {...prevState, [key]: data}
      });
      console.log(key, data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    generateFetchedData('topAlbums', fetchTopAlbums);
    generateFetchedData('newAlbums', fetchNewAlbums);
    generateFetchedData('songs', fetchSongs);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainCard />
    </div>
  );
}

export default App;
