
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact"
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Services from "./sections/Services";
import Readmore from "./pages/Readmore"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="/readmore" element={<Readmore/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
