const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">

      {/* background glow */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-screen-xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT – Social links */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              Let’s Connect
            </h2>

            <p className="text-lg text-gray-600 max-w-md">
              Feel free to reach out for collaborations, opportunities,
              or just a quick chat about frontend development.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <a
                href="https://www.linkedin.com/in/lazik-latief-30a0602b1/"
                 
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-white shadow-md hover:shadow-xl text-center font-medium text-gray-700 hover:text-orange-600 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Lazik-Latief"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-white shadow-md hover:shadow-xl text-center font-medium text-gray-700 hover:text-orange-600 transition"
              >
                GitHub
              </a>

              <a
                href="https://instagram.com/azh__rrr"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-white shadow-md hover:shadow-xl text-center font-medium text-gray-700 hover:text-orange-600 transition"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/9797685148"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-white shadow-md hover:shadow-xl text-center font-medium text-gray-700 hover:text-orange-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT – Contact Form */}
          <div className="bg-white rounded-3xl text-gray-800 shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send me a message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
