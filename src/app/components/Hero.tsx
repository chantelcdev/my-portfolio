import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-4 pt-32 pb-16"
      style={{
        backgroundImage: `url('/computer-code.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <Image
                src="/chantel-crother.png?v=3"
                alt="Chantel Crother"
                width={256}
                height={256}
                className="w-44 h-44 lg:w-64 lg:h-64 rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xl md:text-2xl mb-8 text-gray-900 font-sans font-normal leading-relaxed">
                Hi, I&apos;m Chantel — a Senior Software Engineer with 10+ years
                of experience, currently helping clients transform concepts into
                reliable, high-quality software solutions through thoughtful
                design and clean, efficient code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="font-normal px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 font-sans text-center"
                >
                  See my work{" "}
                </a>
                <a
                  href="#contact"
                  className="font-normal px-8 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 font-sans text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
