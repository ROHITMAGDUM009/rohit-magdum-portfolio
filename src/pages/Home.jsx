import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

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
      {/* Future sections:
          - About
          - Experience
          - 
          - Contact
      */}
    </main>
  );
};

export default Home;
