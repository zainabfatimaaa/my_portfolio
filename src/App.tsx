import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <div className="main-content">
        <Header />
        <Hero />
        <Projects />
        <Experience />
      </div>
      <Contact />
    </div>
  );
}

export default App;
