"use client";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Transparency",
      description:
        "I communicate openly throughout development, asking questions and pointing out potential issues to keep you informed at every step.",
    },
    {
      title: "Efficiency",
      description:
        "I get things done quickly and thoughtfully, delivering simple, high-quality solutions that respect your time and budget.",
    },
    {
      title: "Integrity",
      description:
        "I take accountability and ownership of my work, respecting your time and delivering what was promised.",
    },

    {
      title: "Empathy",
      description:
        "I strive to understand client needs and user perspectives, building solutions that truly help people.",
    },
    {
      title: "Flexibility",
      description:
        "I have a flexible work style and adapt quickly to changes as projects evolve.",
    },
    {
      title: "Commitment",
      description:
        "I go all-in on every project, giving my full focus and best effort from start to finish.",
    },
  ];

  const techStack = [
    { name: "React.js", level: 89 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 89 },
    { name: "JavaScript", level: 95 },
    { name: "C# .NET", level: 96 },
    { name: "Ruby on Rails", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "SQL (MS/MySQL/PostgreSQL)", level: 90 },
    { name: "RESTful APIs", level: 98 },

    { name: "AWS Services", level: 70 },
    { name: "GraphQL", level: 70 },
    { name: "New Relic", level: 75 },

    { name: "Test Automation", level: 100 },

    { name: "Graphic Design", level: 85 },
    { name: "Angular", level: 70 },

    { name: "Agile Scrum", level: 100 },
  ];

  const getExperienceLevel = (level: number): string => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Proficient";
    return "Learning";
  };

  const getExperienceColor = (level: number): string => {
    if (level >= 90) return "text-green-600";
    if (level >= 80) return "text-blue-600";
    if (level >= 70) return "text-indigo-600";
    if (level >= 60) return "text-purple-600";
    if (level >= 40) return "text-orange-600";
    return "text-gray-600";
  };

  return (
    <>
      <section
        id="about"
        className="md:py-50 py-30 px-4 relative"
        style={{
          backgroundImage: `url('/san-luis-obispo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            {/* About Me Section */}
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-5xl mx-auto md:text-lg text-base">
              <p className="mb-6">
                I'm a Senior Software Engineer with a decade of experience
                building complex projects with teams at companies like Mindbody
                and AppFolio. Currently, I partner with clients directly to
                remove blockers and bring their visions to life, while
                maintaining the flexibility to balance work and life. I'm a true
                full-stack developer who loves solving problems and creating
                end-to-end solutions.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me adventuring with my two
                little ones, trying my hand at latte art, enjoying life on the
                Central Coast of California, and getting lost in fantasy books.
              </p>
              <p>
                Check out my values below to learn what's important to me and
                what I bring to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              My Values
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-l-indigo-600 transition-all duration-300 border-l-4 border-indigo-500 cursor-pointer group"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 group-hover:bg-indigo-200 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                      <span className="text-indigo-600 group-hover:text-indigo-700 text-xl font-bold transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 font-sans transition-colors duration-300">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed font-sans transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 pt-0 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Tech Stack & Expertise
            </h3>
            <div className="bg-white rounded-lg p-8 shadow-md max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="space-y-3"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-700 font-sans">
                        {tech.name}
                      </span>
                      <span
                        className={`text-sm font-medium ${getExperienceColor(
                          tech.level
                        )}`}
                      >
                        {getExperienceLevel(tech.level)}
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full"
                        variants={{
                          hidden: { width: 0 },
                          visible: { width: `${tech.level}%` },
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
