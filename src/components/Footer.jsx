const Footer = () => {
  return (
    <footer className="relative bg-white border-t overflow-hidden">

      {/* subtle glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-gray-600 font-medium">
              Designed & Built by{" "}
              <span className="text-gray-800 font-semibold">
                Lazik Latief
              </span>
            </p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} • Frontend Developer
            </p>
          </div>

          {/* Center quote */}
          <p className="text-sm text-gray-500 italic hidden md:block">
            “Clean UI. Clear logic. Real impact.”
          </p>

          {/* Right */}
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="https://github.com/Lazik-Latief"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lazik-latief-30a0602b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:laziklatief@gmail.com"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
