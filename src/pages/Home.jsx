import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <main
      className="min-h-screen transition-colors duration-300
                 bg-gray-100 text-black
                 dark:bg-[#0e0e0e] dark:text-white"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
