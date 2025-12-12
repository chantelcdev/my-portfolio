"use client";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Projects() {
  // Featured project with before/after
  const featuredProject = {
    title: "Full-Stack Development for Real Estate Platform",
    company: "GoldKeyTC & Grandin Taylor Properties",
    typeOfWork: "Contract",
    duration: "2 months",
    description:
      "Redesigned and implemented a modern and interactive homepage. Built a centralized multi-channel notification system for wholesale real-estate platform. Collaborated with the CTO and stakeholders to implement Agile processes, improving delivery efficiency and software quality.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Twilio",
      "SendGrid",
      "PostgreSQL",
    ],
    results: [
      "Scalable and reliable notification system handling for SMS, email, push, and automated calls for Hold My Hand Wholesale platform",
      "Designed and implemented interactive and more inviting home page for GoldKeyTC",
      "Implemented key admin features on GoldKeyTC platform",
      "Organized backlog and implemented Agile Scrum practices to improve team efficiency",
    ],
    beforeImage: "/project-before.png",
    afterImage: "/project-after.png",
    afterImage2: "/project-after-2.png",
    afterVideo: "/goldkeytc-after.mov",
    liveUrl: "http://goldkeytc.com",
    githubUrl: "https://github.com/yourusername/project",
  };

  // Work experience entries
  const workExperience = [
    {
      company: "IQMS",
      role: "Software Developer",
      duration: "2015 - 2017",
      location: "Paso Robles, CA",
      description:
        "Designed and built full-stack web applications and APIs on an Agile Scrum team for ERP manufacturing software.",
      technologies: ["C# .NET", "Angular", "Oracle SQL", "APIs"],
      logo: "/iqms.png",
    },
    {
      company: "Mindbody",
      role: "Software Engineer I - IV",
      duration: "2017 - 2022",
      location: "San Luis Obispo, CA",
      description:
        "Engineered large-scale projects with teams including a webhooks push event system and RESTful APIs used by millions of users. Improved performance, resolved incidents, and increased automated test coverage in various codebases. Mentored new engineers and performed code reviews.",
      technologies: [
        "C# .NET",
        "SQL Server",
        "AWS Services",
        "PostgreSQL",
        ".NET Core",
        "APIs",
        "Azure DevOps",
        "Kubernetes",
      ],
      logo: "/mindbody.jpg",
    },
    {
      company: "AppFolio",
      role: "Senior Software Engineer",
      duration: "2022 - 2025",
      location: "Remote / Santa Barbara, CA",
      description:
        "Led integration with Zillow to book property showings instantly through new APIs and back-end logic using Ruby on Rails. Worked on AI team to build new Leasing Agent with chat functionality. Implemented new AI settings page using React/Next.js.",
      technologies: ["Ruby on Rails", "React", "MySQL", "Java", "LLMs"],
      logo: "/appfolio.png",
    },
    {
      company: "Grandin Taylor Properties / GoldKeyTC",
      role: "Senior Software Engineer (contract)",
      duration: "Aug 2025 - Oct 2025",
      location: "Remote",
      description:
        "Redesigned and implemented a modern and interactive homepage. Built a centralized multi-channel notification system for wholesale real-estate platform. Collaborated with the CTO and stakeholders to implement Agile processes, improving delivery efficiency and software quality.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Twilio",
        "SendGrid",
        "PostgreSQL",
      ],
      logo: "/goldkeytc.png",
    },
    {
      company: "Chantel Crother",
      role: "The Software Engineer Your Project Needs",
      duration: "2025 - Present",
      location: "Remote",
      description: "Work with me to get your next project off the ground!",
      technologies: ["React", "Next.js", ".NET", "Whatever fits your project"],
      logo: "/chantel-crother-logo.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 mt-4 text-gray-800">
            My Work
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {featuredProject.title}
                </h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    {featuredProject.typeOfWork}
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {featuredProject.duration}
                  </span>
                  <span>{featuredProject.company}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Results:
                  </h4>
                  <ul className="space-y-2">
                    {featuredProject.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-green-500 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                  {/* <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a> */}
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 text-center">
                  Before
                </h4>
                <div className="relative aspect-video rounded-lg overflow-y-auto shadow-lg border border-gray-200">
                  <Image
                    src={featuredProject.beforeImage}
                    alt="Project before redesign"
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 text-center">
                  After
                </h4>
                <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <video
                    src={featuredProject.afterVideo}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Timeline */}
        <style jsx>{`
          :global(.vertical-timeline::before) {
            background: #6366f1 !important;
          }
          .vertical-timeline-element-icon {
            width: 80px !important;
            height: 80px !important;
          }
        `}</style>
        <VerticalTimeline>
          {workExperience.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#ffffff",
                color: "#1f2937",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                border: "1px solid #e5e7eb",
              }}
              contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
              date={job.duration}
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              }
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ color: "#4f46e5" }}
              >
                {job.role}
              </h2>
              <h3 className="italic vertical-timeline-element-subtitle">
                {job.company}
              </h3>
              <p>{job.description}</p>
              <h3 className="mb-3 mt-3">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Contact Me Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
