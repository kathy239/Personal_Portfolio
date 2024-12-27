import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import ConnectMe from "./Components/Connect/ConnectMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<ConnectMe />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
