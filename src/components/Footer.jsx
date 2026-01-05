const Footer = () => {
  return (
    <footer className="px-10 md:px-20 mt-32 pb-12">
      
      {/* Contact CTA */}
      <div>
        <p className="text-gray-600 mb-4">
          👋 Get in touch at
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          maxwell.marra@gmail.com
        </h2>

        <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-black transition">
          Contact Me
        </button>
      </div>

      {/* Divider */}
      <hr className="my-16 border-gray-300" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Resume</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>

        <a href="#" className="hover:text-black">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
