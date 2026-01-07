import logo from '../assets/R_logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm
                       bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo + Name */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={logo}
                alt="R logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            <span className="text-lg sm:text-xl font-medium text-black dark:text-white">
              <span className="text-gray-600 dark:text-gray-400">Rohit </span>
              <span className="text-black dark:text-white">Magdum</span>
            </span>
          </div>

          {/* Nav Links + Theme Toggle */}
          <div className="flex items-center space-x-6">

            <nav className="space-x-8 text-sm font-medium
                            text-gray-600 dark:text-gray-400">
              {["Home", "About", "Resume", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative transition
                             hover:text-black dark:hover:text-white"
                >
                  {item}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[1px]
                               bg-black dark:bg-white
                               transition-all duration-300 group-hover:w-full hover:w-full"
                  />
                </a>
              ))}
            </nav>

            {/* Theme Toggle Button */}
                      <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-full
                        bg-gray-200 dark:bg-gray-800
                        text-black dark:text-white
                        hover:scale-110 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
