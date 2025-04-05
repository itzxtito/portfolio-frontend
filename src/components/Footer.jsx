export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Tito • All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/itzxtito"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/feliciano-tito"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@freshhitxp?si=2egfnIX8JF0MT6Gm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    );
  }
  