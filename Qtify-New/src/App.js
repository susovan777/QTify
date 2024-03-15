import HeroImage from "./Components/HeroImage/HeroImage";
import Navbar from "./Components/Navbarcomponent/Navbar";
import Section from "./Components/Sectioncomponent/Section";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const functionTopApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/top";
    let response = await axios.get(URL);
    setTopAlbums(response.data);
  };

  const functionNewApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/new";
    let response = await axios.get(URL);
    setNewAlbums(response.data);
  };

  useEffect(() => {
    functionTopApi();
    functionNewApi();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Section text="Top Albums" data={topAlbums} />
      <Section text="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
