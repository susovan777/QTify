import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumCard from "./components/Card/Card";
import GetData from "./components/API/api";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AlbumCard />
      <GetData />
    </div>
  );
}

export default App;
