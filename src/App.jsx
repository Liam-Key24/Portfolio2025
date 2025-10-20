import './App.css';
import './index.css';

import ScrollToTop from "./components/ScrollTop.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer'
import LandingPage from './pages/landingpage';
import ProjectPage from './pages/projectPage'; 
import About from './pages/aboutPage';
import Contact from './pages/contactPage';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/contactPage" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
