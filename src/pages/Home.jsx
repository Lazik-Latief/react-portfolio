import { Link } from "react-router-dom";
import profile from "../assets/profile.JPG";

const Home = () => {
  return (
    <section className="relative min-h-[90vh] bg-linear-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I’m <span className="text-orange-600">Lazik</span> 
          </h1>

          <h2 className="text-2xl font-semibold text-gray-700">
            Frontend Developer
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            I build modern, clean, and responsive web interfaces using
            <span className="font-semibold text-gray-700"> JavaScript, React, and Tailwind CSS</span>.
            I enjoy turning ideas into real products and continuously improving
            my skills through hands-on projects.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projects"
              className="px-7 py-3 bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-xl transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border-2 border-orange-600 text-orange-600 rounded-xl hover:bg-orange-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-orange-400 to-pink-400 blur-2xl opacity-40 scale-105"></div>

            {/* Image card */}
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
              <img
                src={profile}
                alt="Lazik Latief"
                className="w-72 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
