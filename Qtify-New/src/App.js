import HeroImage from "./Components/HeroImage/HeroImage";
import Navbar from "./Components/Navbarcomponent/Navbar";
import Section from "./Components/Sectioncomponent/Section";
import {
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./Components/API/api";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  // const [songData, setSongData] = useState([]);
  // const [filteredDataValues, setFilteredDataValues] = useState([]);

  const handleChange = (Event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

  // const generateSongData = (value) => {
  //   let key;
  //   if (value === 0) {
  //     filteredData(songData);
  //     return;
  //   } else if (value === 1) {
  //     key = "rock";
  //   } else if (value === 2) {
  //     key = "pop";
  //   }
  //   const res = songData.filter((item) => item.genre.key === key);
  //   filteredData(res);
  // };

  // useEffect(() => {
  //   generateSongData(value);
  // }, [value]);

  // const filteredData = (value) => {
  //   setFilteredDataValues(value);
  // };

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

  
  console.log(topAlbums, newAlbums, songs);
  
  return (
    <div>
      <Navbar />
      <HeroImage />
      <div className="sectionWrapper">
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          type="song"
          value={value}
          // filteredDataValues={filteredDataValues}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
