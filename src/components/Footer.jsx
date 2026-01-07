const Footer = () => {
  return (
    <footer className="px-10 md:px-20 mt-32 pb-12">
      
      {/* Contact CTA */}
      <div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          👋 Get in touch at
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          rohitmagdum2@gmail.com
        </h2>

        <button
          className="mt-6 px-6 py-3 rounded-full text-sm font-medium
                     bg-gray-800 text-white
                     dark:bg-white dark:text-black
                     hover:bg-black dark:hover:bg-gray-200
                     hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </button>
      </div>

      {/* Divider */}
      <hr className="my-16 border-gray-300 dark:border-gray-700" />

      {/* Bottom Footer */}
      <div
        className="flex flex-col md:flex-row justify-between items-center
                   text-sm text-gray-600 dark:text-gray-400"
      >
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-black dark:hover:text-white">Home</a>
          <a href="#" className="hover:text-black dark:hover:text-white">About</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Resume</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Contact</a>
        </div>

        <a href="#" className="hover:text-black dark:hover:text-white">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
