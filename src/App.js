import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // Make sure to create this component
import SBOM from './pages/SBOM'; // Make sure to create this component
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/sbom" element={<SBOM />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
