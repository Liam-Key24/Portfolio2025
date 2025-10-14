import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer'
import LandingPage from './pages/landingpage';
import ProjectPage from './pages/projectPage'; 
import About from './pages/aboutPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
