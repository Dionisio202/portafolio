import avatar from '../assets/img/edison.jpg';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between px-15 py-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Avatar o Logo */}
      <div className="flex items-center gap-2">
        <img src={avatar} alt="Avatar" className="w-15 h-15 rounded-full" />
        <span className="font-bold text-xl">Edison</span>
      </div>

      {/* Menú de navegación */}
      <nav className="flex items-center gap-6">
        <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
        <a href="#about" className="hover:text-blue-500 transition">About</a>
        <a href="#contact" className="hover:text-blue-500 transition">Contact</a>

        {/* Botón para cambiar el tema */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
