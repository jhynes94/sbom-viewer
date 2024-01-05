import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
