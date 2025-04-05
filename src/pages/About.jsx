import profile from '../assets/profile.jpg'; // Optional: remove if not using image

export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={profile}
            alt="Tito profile"
            className="w-52 h-52 rounded-full object-cover border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Hey, I’m <span className="font-semibold text-purple-600">Tito</span> — a full-stack web developer and creative with a passion for both building apps and creating content.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            I recently completed the <span className="font-semibold">Per Scholas Software Engineering Bootcamp</span>,
            where I learned HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and built full-stack apps from scratch.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Outside of code, I’m a former DJ and now a gaming content creator — remixing gameplay clips with my own custom music and uploading to YouTube Shorts, Instagram Reels, and TikTok.
          </p>
          <p className="text-lg leading-relaxed">
            I’m currently seeking a <span className="font-semibold">remote developer position</span> while continuing to build my own portfolio apps.
            Let’s connect and create something great together!
          </p>

          {/* Skills / Tech Stack */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Tech Stack</h3>
            <ul className="flex flex-wrap gap-4 text-sm">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'JWT',
                'Bcrypt',
                'Git',
                'Vite',
                'Netlify',
                'Render',
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/tito-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              📄 View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
