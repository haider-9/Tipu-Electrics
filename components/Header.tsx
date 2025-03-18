"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isScrolled = scrollPosition > 20;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md py-2 shadow-lg shadow-black/10"
            : "bg-transparent py-5"
        }`}
      >
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
                  width={isScrolled ? 36 : 42}
                  height={isScrolled ? 36 : 42}
                  className="object-contain transition-all duration-300"
                />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className={`font-bold text-white font-['Montserrat'] tracking-wider transition-all duration-300 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
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
                isScrolled={isScrolled}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-2">
              <Link href="/contact">
                <Button
                  variant="default"
                  className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 group"
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
            className="lg:hidden relative z-10 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5">
              <span
                className={`block h-0.5 bg-yellow-400 transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-0.5 bg-yellow-400 transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-0.5 bg-yellow-400 transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/98 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <nav className="flex flex-col items-center space-y-6">
                {[
                  { path: "/", label: "Home", delay: 0.3 },
                  { path: "/services", label: "Services", delay: 0.4 },
                  { path: "/about", label: "About Us", delay: 0.5 },
                ].map((item) => (
                  <MobileNavLink
                    key={item.path}
                    href={item.path}
                    active={pathname === item.path}
                    delay={item.delay}
                  >
                    {item.label}
                  </MobileNavLink>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="mt-10"
              >
                <Link href="/contact">
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-medium px-8 py-3 rounded-full text-lg shadow-lg shadow-yellow-500/20"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 flex space-x-6"
              >
                {[
                  { icon: "facebook", href: "#" },
                  { icon: "instagram", href: "#" },
                  { icon: "twitter", href: "#" },
                ].map((social) => (
                  <Link
                    key={social.icon}
                    href={social.href}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    aria-label={`Follow us on ${social.icon}`}
                  >
                    <SocialIcon type={social.icon} />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop Navigation Link
function NavLink({ href, active, isScrolled, children }) {
  return (
    <Link href={href} className="relative group">
      <div
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          active
            ? "text-yellow-400 bg-slate-800/50"
            : "text-white hover:text-yellow-400 hover:bg-slate-800/30"
        } ${isScrolled ? "text-sm" : "text-base"}`}
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

// Mobile Navigation Link
function MobileNavLink({ href, active, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link href={href} className="relative group block">
        <div
          className={`text-2xl font-medium transition-colors ${
            active ? "text-yellow-400" : "text-white"
          }`}
        >
          {children}
          <span
            className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
              active ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </div>
      </Link>
    </motion.div>
  );
}

// Social Media Icons
function SocialIcon({ type }) {
  switch (type) {
    case "facebook":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.38 4.49 19.03 2.56 19C2.22 19 1.88 18.98 1.54 18.93C3.44 20.15 5.7 20.85 8 20.85C16 20.85 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.24C21.16 7.63 21.88 6.87 22.46 6Z" />
        </svg>
      );
    default:
      return null;
  }
}
