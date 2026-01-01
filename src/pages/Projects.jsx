const projects = [
  {
    title: "React Portfolio Website",
    description:
      "A personal portfolio built using React Router showcasing my projects, skills, and contact information.",
    tech: ["React","React-Router", "Tailwind"],
    live: "https://lazik-latief.github.io/react-portfolio/",
    github: "https://github.com/Lazik-Latief/react-portfolio",
  },
  {
    title: "Temperature Converter",
    description:
      "A simple and interactive temperature converter with clean UI and proper state handling.",
    tech: ["JavaScript", "CSS"],
    live: "https://lazik-latief.github.io/temp-switch-react/",
    github: "https://github.com/Lazik-Latief/temp-switch-reacts",
  },
  {
    title: "Secure Keysmith",
    description:
      "A React-based secure password builder with live strength analysis and  developed independently from scratch.",
    tech: ["React","React-Hooks","Tailwind",],
    live: "https://lazik-latief.github.io/secure-keysmith/",
    github: "https://github.com/Lazik-Latief/secure-keysmith",
  },
  {
    title: "React RTK Todo",
    description:
      "This is a Todo Application built while learning Redux Toolkit with React. I built this project as a learning exercise, not just to make a Todo app.",
    tech: ["Redux Toolkit", "React", "Tailwind"],
    live: "https://lazik-latief.github.io/react-redux-toolkit-todo/",
    github: "https://github.com/Lazik-Latief/react-redux-toolkit-todo",
  },
  {
    title: "Counting In React",
    description:
      "This is a simple Counter application built using React with Vite. The app increases and decreases a number when buttons are clicked.",
    tech: ["React", "useState Hook", "Tailwind"],
    live: "https://lazik-latief.github.io/Counting-In-React/",
    github: "https://lazik-latief.github.io/Counting-In-React/",
  },
  {
    title: "Attendance Risk Tracker",
    description:
      "A simple web app that helps students calculate their attendance percentage and understand whether they are in the Safe, Warning, or Critical zone.",
    tech: ["JavaScript", "CSS", "HTML"],
    live: "https://lazik-latief.github.io/attendance-risk-tracker/",
    github: "https://github.com/Lazik-Latief/attendance-risk-tracker",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6 space-y-14">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            Projects
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            A collection of projects I built to strengthen my frontend skills,
            focusing on clean UI, real-world logic, and modern best practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 border-2 border-orange-600 text-orange-600 rounded-xl hover:bg-orange-50 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
