"use client";

import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Info,
  Settings,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Define route configuration with icons and labels
const routeConfig = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Info },
  { path: "/services", label: "Services", icon: Settings },
  { path: "/contact", label: "Contact", icon: Phone },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  // Find current route index
  const currentIndex = routeConfig.findIndex(
    (route) => route.path === pathname
  );
  const prevRoute =
    currentIndex <= 0
      ? routeConfig[routeConfig.length - 1].path
      : routeConfig[currentIndex - 1].path;
  const nextRoute =
    currentIndex >= routeConfig.length - 1
      ? routeConfig[0].path
      : routeConfig[currentIndex + 1].path;

  // Handle navigation with direction tracking
  const handleNavigation = useCallback((direction: "left" | "right") => {
    setSlideDirection(direction);
  }, []);

  // Page transition variants for framer-motion
  const pageVariants = {
    initial: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait" custom={slideDirection}>
        <motion.div
          key={pathname}
          custom={slideDirection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Link
          href={prevRoute}
          passHref
          onClick={() => handleNavigation("left")}
        >
          <Button
            variant="outline"
            className="border-2 border-amber-500 text-amber-500 p-2 hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-full shadow-lg"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <Link
          href={nextRoute}
          passHref
          onClick={() => handleNavigation("right")}
        >
          <Button
            variant="outline"
            className="border-2 border-amber-500 text-amber-500 p-2 hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-full shadow-lg"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
