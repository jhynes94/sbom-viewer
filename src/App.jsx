// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SBOM from './pages/SBOM';
import About from './pages/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.NODE_ENV === 'development' ? '' : '/sbom-viewer'}>
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
