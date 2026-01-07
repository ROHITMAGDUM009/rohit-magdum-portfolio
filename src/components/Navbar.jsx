import logo from '../assets/R_logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            {/* Logo */}
            <div>
              <img src={logo} alt="9" className='w-6 h-6 sm:w-8 sm:h-8' />
            </div>
          
            {/* Name */}
            <span className="text-lg sm:text-xl font-medium text-black">
              <span className="text-gray-600">Rohit </span>
              <span className="text-black">Magdum</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-6 lg:space-x-8 text-gray-600">
            <a href="#" className="hover:text-black transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-black transition-colors duration-300">About</a>
            <a href="#resume" className="hover:text-black transition-colors duration-300">Resume</a>
            <a href="#contact" className="hover:text-black transition-colors duration-300">Contact</a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
