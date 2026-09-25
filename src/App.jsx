import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Groups from './components/Groups';
import DayFlow from './components/DayFlow';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Docs from './components/Docs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Groups />
        <DayFlow />
        <Team />
        <Gallery />
        <Docs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
