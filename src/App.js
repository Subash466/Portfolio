import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Projects from './Components/Pages/Projects/Projects';
import Resume from './Components/Pages/Resume/Resume';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Projects />
     <Contact />
     <Resume />
     <Footer />
    </div>
  );
}

export default App;
