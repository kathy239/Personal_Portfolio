import "./App.css";
import NavBar from "./Components/NavBar/Navbar"; // Adjusted for proper relative path
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
