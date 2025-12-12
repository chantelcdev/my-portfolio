"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:me@chantelcrother.dev"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                me@chantelcrother.dev
              </a>
              <a
                href="tel:+18055740976"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                (805) 574-0976
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                Paso Robles, California
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Me
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                My Work
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social & Professional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/chantelcdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chantel-crother-5173398b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Chantel Crother. All rights reserved.
          </p>
          <p className="text-gray-400 pt-1">
            Built with React, Tailwind CSS, and Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
