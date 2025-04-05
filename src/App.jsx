import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';



export default function App() {
  return (
    <Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

  </Routes>
</Router>

  );
}


