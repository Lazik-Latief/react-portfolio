import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Lazik.
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["/", "/about", "/projects", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Projects", "Contact"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative pb-1 transition ${
                      isActive
                        ? "text-orange-600 after:w-full"
                        : "text-gray-700 hover:text-orange-600 after:w-0"
                    }
                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                    after:bg-orange-600 after:transition-all after:duration-300`
                  }
                >
                  {names[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
