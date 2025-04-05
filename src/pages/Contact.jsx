export default function Contact() {
    return (
      <section className="min-h-screen px-6 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-6">
            I’d love to hear from you! Whether it’s a project idea, collaboration, or just to chat, feel free to reach out.
          </p>
  
          <form
            action="https://formspree.io/f/mwkalbzb"
            method="POST"
            className="space-y-6 max-w-md mx-auto"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  