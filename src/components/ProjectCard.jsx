export default function ProjectCard({ title, description, liveLink, frontendLink, backendLink }) {
    return (
      <div className="border rounded-lg p-4 bg-white shadow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-col space-y-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              🌐 Live Site
            </a>
          )}
          {frontendLink && (
            <a
              href={frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              💻 Frontend GitHub Repo
            </a>
          )}
          {backendLink && (
            <a
              href={backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              ⚙️ Backend GitHub Repo
            </a>
          )}
        </div>
      </div>
    );
  }
  