import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-auto flex items-center justify-center transition-all duration-300 z-50 px-4 py-2
      ${isScrolled ? ' backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mt-4' : 'bg-transparent w-full max-w-6xl justify-between px-8 md:px-20 py-4'}`}
    >
      {/* Logo manual: </> */}
      {!isScrolled && (
        <div className="flex items-center gap-2 mr-70">
          <span className="text-xl sm:text-lg font-mono font-bold">&lt;/&gt;</span>
        </div>
      )}

      {/* Navegación */}
      <nav className="flex items-center gap-6 sm:gap-4 text-sm sm:text-xs">
        <a href="#projects" className="hover:text-blue-500 transition font-medium">
          Projects
        </a>
        <a href="#about" className="hover:text-blue-500 transition font-medium">
          About me
        </a>
        <a href="#certificates" className="hover:text-blue-500 transition font-medium">
          Certificates
        </a>
        <a href="#contact" className="hover:text-blue-500 transition font-medium">
          Contact
        </a>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition ${
            theme === 'dark'
              ? ' bg-gray-100 text-black hover:bg-gray-300'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {theme === 'light' ? (
            <FiSun className="w-4 h-4 sm:w-3 sm:h-3" />
          ) : (
            <FiMoon className="w-4 h-4 sm:w-3 sm:h-3" />
          )}
        </button>

        {!isScrolled && (
          <a
            href="/Edison-Ortiz-CV.pdf"
            download
            className="ml-4 px-3 py-1.5 sm:px-2 sm:py-1 rounded bg-gray-900 text-white text-sm sm:text-xs font-medium hover:bg-gray-800 transition"
          >
            Download CV
          </a>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
