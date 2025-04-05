import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4 text-center">
      <img
        src={profile}
        alt="Tito's Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
      />
      <h1 className="text-5xl font-bold mb-4">Hey, I'm Tito 👋</h1>
      <p className="text-lg max-w-xl">
        I’m a full-stack developer and content creator with a passion for building clean,
        interactive apps and remixing gaming clips into music video shorts.
      </p>
    </section>
  );
}
