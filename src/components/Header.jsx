import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Lazik.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600 transition"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white border-t px-6 py-4 space-y-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-orange-600 transition"
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="block text-center px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


// without mobile navigation
// import { NavLink, Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
//       <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-orange-600">
//           Lazik.
//         </Link>

//         {/* Nav Links */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           {["/", "/about", "/projects", "/contact"].map((path, i) => {
//             const names = ["Home", "About", "Projects", "Contact"];
//             return (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `relative pb-1 transition ${
//                       isActive
//                         ? "text-orange-600 after:w-full"
//                         : "text-gray-700 hover:text-orange-600 after:w-0"
//                     }
//                     after:absolute after:left-0 after:bottom-0 after:h-[2px]
//                     after:bg-orange-600 after:transition-all after:duration-300`
//                   }
//                 >
//                   {names[i]}
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>

//         {/* CTA */}
//         <Link
//           to="/contact"
//           className="hidden md:block px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
//         >
//           Hire Me
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

