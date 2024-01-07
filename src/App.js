import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SBOM from './pages/SBOM';
import About from './pages/About';
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
            <Route path="/" element={<SBOM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
