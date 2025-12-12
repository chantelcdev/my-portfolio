"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Adjust for fixed navbar after scroll
      setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset;
        const targetY = rect.top + scrollTop - 20;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }, 50);
    }

    window.history.pushState(null, "", href);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "My Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 py-1">
        <div className="flex justify-between items-center w-full">
          {/* Logo/Name */}
          <motion.a
            href="#home"
            className={`font-bold text-gray-800 hover:text-indigo-600 transition-all duration-300 flex-shrink-0 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/chantel-crother-logo.png"
              alt="Logo"
              className={`inline-block transition-all duration-300 ${
                isScrolled ? "h-16 w-16" : "md:h-50 md:w-50 h-30 w-30"
              }`}
            />
          </motion.a>

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              x: isScrolled ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
