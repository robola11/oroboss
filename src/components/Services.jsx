import { skills } from "../data";

const Services = () => {
  return (
    <section
      id="service"
      className="py-5 relative overflow-hidden bg-white
       dark:bg-zinc-900 border-b border-b-zinc-300/70 border-blur-md dark:border-b-zinc-700/70 border-blur-md"
    >
      <div className="py-5 relative overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4 text-[#31404c]
            dark:text-white"
            >
              Our
              <span
                style={{
                  background: "linear-gradient(to right, #546f84, #415768)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {" "}
                Services
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-[#31404c] dark:text-[#d1d5db]">
              Areas of Specialisation and Services We render
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="bg-white rounded-xl border border-zinc-300/70 dark:border-zinc-700/70 border-blur-md p-6
                  shadow-md hover:shadow-lg
                 transition-shadow duration-500 flex flex-col justify-between hover:translate-y-2
                 dark:bg-linear-to-r from-zinc-800 to-zinc-900 dark:shadow:sm dark:hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={`${300 * index * 100}`}
              >
                <div className="">
                  <h3 className="text-xl font-semibold text-[#31404c] dark:text-zinc-300 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-600  dark:text-zinc-400 text-sm mb-6">
                    {skill.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-[#546f84] hover:text-[#2e3e4a]
                  dark:text-[#b9c2c9] dark:hover:text-[#e9edef]"
                  >
                    {skill.linkText} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
