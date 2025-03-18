"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { PhoneIcon, MailIcon } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="transition-all duration-500 backdrop-blur-md py-6 shadow-lg shadow-black/10">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/favicon.png"
                  alt="Tipu Electrics Logo"
                  width={36}
                  height={36}
                  className="object-contain transition-all duration-300"
                />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div className="overflow-hidden">
                <motion.h1 className="font-bold text-white font-normal tracking-wider transition-all duration-300 text-xl">
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                    TIPU ELECTRICS
                  </span>
                </motion.h1>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About Us" },
            ].map((item) => (
              <NavLink
                key={item.path}
                href={item.path}
                active={pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-2">
              <Link href="/contact">
                <Button
                  variant="default"
                  className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-normal px-6 py-2 rounded-full shadow-md transition-all duration-300 group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <span
                className={`absolute block h-0.5 bg-yellow-400 transform transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-6 rotate-45" : "w-6 -translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-0.5 bg-yellow-400 transition-all duration-200 ease-out ${
                  isMenuOpen ? "w-0 opacity-0" : "w-6"
                }`}
              />
              <span
                className={`absolute block h-0.5 bg-yellow-400 transform transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-6 -rotate-45" : "w-6 translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Redesigned Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 z-50 lg:hidden overflow-hidden"
            >
              {/* Electric circuit pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    id="circuit"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M10 10 H40 V40 H10 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                    <circle cx="40" cy="40" r="2" fill="currentColor" />
                    <path
                      d="M25 10 V25 H40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              {/* Content container */}
              <div className="relative h-full flex flex-col p-8">
                {/* Logo area */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-12"
                >
                  <div className="relative">
                    <Image
                      src="/favicon.png"
                      alt="Tipu Electrics Logo"
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                    <motion.div
                      className="absolute -inset-1 rounded-full bg-yellow-400/30"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </div>
                  <h2 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                      TIPU ELECTRICS
                    </span>
                  </h2>
                </motion.div>

                {/* Navigation links */}
                <nav className="flex-1">
                  <div className="space-y-1">
                    {[
                      { path: "/", label: "Home", icon: "🏠", delay: 0.2 },
                      {
                        path: "/services",
                        label: "Services",
                        icon: "⚡",
                        delay: 0.3,
                      },
                      {
                        path: "/about",
                        label: "About Us",
                        icon: "ℹ️",
                        delay: 0.4,
                      },
                      {
                        path: "/contact",
                        label: "Contact",
                        icon: "📞",
                        delay: 0.5,
                      },
                    ].map((item) => (
                      <MobileNavLink
                        key={item.path}
                        href={item.path}
                        active={pathname === item.path}
                        delay={item.delay}
                        icon={item.icon}
                      >
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </nav>

                {/* Quick contact info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pt-6 border-t border-yellow-500/20"
                >
                  <h3 className="text-yellow-400 text-sm font-medium mb-3">
                    QUICK CONTACT
                  </h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p className="flex items-center gap-2">
                      <PhoneIcon /> +923174636995
                    </p>
                    <p className="flex items-center gap-2">
                      <MailIcon /> tipu672888@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ repeat: Infinity, duration: 8 }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop Navigation Link
function NavLink({ href, active, children }) {
  return (
    <Link href={href} className="relative group">
      <div
        className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-normal ${
          active
            ? "text-yellow-400 bg-slate-800/50"
            : "text-white hover:text-yellow-400 hover:bg-slate-800/30"
        }`}
      >
        {children}
        <span
          className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
            active ? "w-10" : "w-0 group-hover:w-10"
          }`}
        />
      </div>
    </Link>
  );
}

// Redesigned Mobile Navigation Link
function MobileNavLink({ href, active, delay, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link href={href} className="block">
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
            active
              ? "bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 text-yellow-400 border-l-2 border-yellow-500"
              : "text-slate-300 hover:bg-slate-800/30 hover:text-yellow-400"
          }`}
        >
          <span className="text-xl w-8 h-8 flex items-center justify-center rounded-md bg-slate-800/50">
            {icon}
          </span>
          <span className="font-medium">{children}</span>

          {active && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto w-2 h-2 rounded-full bg-yellow-400"
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
}
