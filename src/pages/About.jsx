const About = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-screen-xl mx-auto px-6 space-y-14">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            I’m a frontend developer who enjoys building{" "}
            <span className="font-semibold text-gray-700">
              clean, scalable, and user-focused interfaces
            </span>.
            My goal is to create web experiences that feel intuitive,
            performant, and visually polished.
          </p>
        </div>

        {/* Core values / strengths */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Focus",
              desc: "Strong foundation in HTML, CSS, JavaScript, and React with a focus on real-world UI problems."
            },
            {
              title: "Continuous Learning",
              desc: "I learn by building projects, debugging issues, and improving my understanding step by step."
            },
            {
              title: "Clean & Scalable Code",
              desc: "I believe readable code, proper structure, and reusable components lead to better products."
            }
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git & GitHub"
          ].map(skill => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:text-orange-600 transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
