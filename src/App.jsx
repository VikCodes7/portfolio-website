import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Profile />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
