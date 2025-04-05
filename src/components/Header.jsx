import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black bg-opacity-70 text-white py-4 px-6 fixed w-full top-0 z-50 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Tito's Portfolio</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/projects" className="hover:text-purple-400">Projects</Link>

          {/* Add more nav links here later */}
        </div>
      </nav>
    </header>
  );
}
