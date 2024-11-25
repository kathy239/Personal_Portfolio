import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
