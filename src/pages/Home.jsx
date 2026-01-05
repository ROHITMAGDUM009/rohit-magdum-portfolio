import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

/**
 * Home Page
 * Contains all sections related to the landing page
 */
const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
          <Navbar />
          <Hero />
          <Projects />
          <Footer/>
    </main>
  );
};

export default Home;
