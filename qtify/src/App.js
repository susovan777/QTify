import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import {
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./components/API/api";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState({});

  const generateFetchedData = async (key, source) => {
    try {
      const data = await source();
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
      // console.log(key, data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    generateFetchedData("topAlbums", fetchTopAlbums);
    generateFetchedData("newAlbums", fetchNewAlbums);
    generateFetchedData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} type="song" />
      </div>
    </div>
  );
}

export default App;
