export default function Projects() {
    return (
      <section className="min-h-screen px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recipe App Project */}
          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Recipe App</h3>
            <p className="mb-4">
              A full-stack MERN app with user authentication, image uploads, comments, and favorites.
              Built using React, Node.js, Express, MongoDB, JWT, and bcrypt.
            </p>
  
            <div className="flex flex-col space-y-2">
              <a
                href="https://potluck-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                🌐 Live Site
              </a>
              <a
                href="https://github.com/itzxtito/capstone-frontend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                💻 Frontend GitHub Repo
              </a>
              <a
                href="https://github.com/itzxtito/capstone-backend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ⚙️ Backend GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  