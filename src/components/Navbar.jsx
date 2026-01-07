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
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
