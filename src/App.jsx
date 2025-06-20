import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Experience from './component/experience/experience';
import Projects from './component/Project/Projects';
import Contact from './component/Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16"> 
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
