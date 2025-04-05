import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';



export default function App() {
  return (
    <Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />

  </Routes>
</Router>

  );
}


