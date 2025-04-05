import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-black bg-opacity-70 text-white py-4 px-6 fixed w-full top-0 z-50 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Tito's Portfolio</h1>
        <div className="space-x-6">
          <Link
            to="/"
            className={`transition duration-200 hover:text-purple-400 hover:scale-105 ${
              location.pathname === '/' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition duration-200 hover:text-purple-400 hover:scale-105 ${
              location.pathname === '/about' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`transition duration-200 hover:text-purple-400 hover:scale-105 ${
              location.pathname === '/projects' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`transition duration-200 hover:text-purple-400 hover:scale-105 ${
              location.pathname === '/contact' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
