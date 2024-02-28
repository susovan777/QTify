import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumCard from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AlbumCard />
      {/* <GetData /> */}
    </div>
  );
}

export default App;
