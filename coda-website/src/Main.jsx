/**
 * Entry point to all the components of the webpage
 * @author Tanish Bagadia
 */

import Navbar from './components/Navbar';
import Nutshell from './components/Nutshell';
import Hero from './components/Hero';
import Feature from './components/Features';
import Packages from './components/Packages';
import Team from './components/Team';
import Footer from './components/Footer';

import './Main.css';

function Main() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nutshell />
        <Feature />
        <Packages />
        <Team />
        <Footer />
      </main>
    </>
  );
}

export default Main;
