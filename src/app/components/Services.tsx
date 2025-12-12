"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, Users, Zap, BugOff, Wrench, Unplug } from "lucide-react";

// Service Card Component
function ServiceCard({
  service,
  index,
  expandedService,
  toggleService,
}: {
  service: {
    title: string;
    description: string;
    icon: any;
  };
  index: number;
  expandedService: string | null;
  toggleService: (title: string) => void;
}) {
  return (
    <motion.div
      key={service.title}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="p-8 cursor-pointer"
        onClick={() => toggleService(service.title)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 pr-4">
            <service.icon className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-gray-800 font-sans">
              {service.title}
            </h3>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleService(service.title);
            }}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={
              expandedService === service.title
                ? "Collapse description"
                : "Expand description"
            }
          >
            <motion.svg
              className="w-5 h-5 cursor-pointer text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: expandedService === service.title ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {expandedService === service.title && (
          <motion.div
            key={service.title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-gray-100 bg-gray-50"
          >
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [expandedServiceLeft, setExpandedServiceLeft] = useState<string | null>(
    null
  );
  const [expandedServiceRight, setExpandedServiceRight] = useState<
    string | null
  >(null);

  const toggleServiceLeft = (title: string) => {
    setExpandedServiceLeft(expandedServiceLeft === title ? null : title);
  };

  const toggleServiceRight = (title: string) => {
    setExpandedServiceRight(expandedServiceRight === title ? null : title);
  };

  const leftServices = [
    {
      title: "Launch Projects Fast",
      description:
        "I work with existing teams or independently to build software solutions using modern frameworks like React, Next.js, and Ruby on Rails to deliver seamless user experiences quickly and efficiently.",
      icon: Rocket,
    },
    {
      title: "Provide Technical Leadership",
      description:
        "I give guidance on architecture, technology choices, and development best practices. I lead cross-functional teams in designing and delivering high-quality software using Agile Scrum best practices.",
      icon: Users,
    },
    {
      title: "Integrate Systems",
      description:
        "I can create robust RESTful APIs and integrate third-party services to connect your applications with external and internal systems and data sources.",
      icon: Unplug,
    },
  ];

  const rightServices = [
    {
      title: "Optimize Performance",
      description:
        "I design efficient database schemas and optimize queries to ensure your application performs well at scale.",
      icon: Zap,
    },
    {
      title: "Release with Confidence",
      description:
        "I audit and implement comprehensive testing suites including unit, integration, and end-to-end tests to improve code reliability and catch bugs early.",
      icon: BugOff,
    },
    {
      title: "Reduce Technical Debt",
      description:
        "I analyze and optimize existing codebases by identifying performance bottlenecks, reducing complexity, and refactoring legacy services to improve scalability and maintainability.",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 mt-8 text-center">
          How I Can Help
        </h2>
        <div className="max-w-3xl mx-auto text-xl text-gray-600 text-center mb-12 leading-relaxed">
          Whether you're trying to get a new idea off the ground, improve an
          existing product, or solve complex problems, I can help make it
          happen.
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                expandedService={expandedServiceLeft}
                toggleService={toggleServiceLeft}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + leftServices.length}
                expandedService={expandedServiceRight}
                toggleService={toggleServiceRight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
