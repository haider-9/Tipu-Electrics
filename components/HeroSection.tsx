"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaBoltLightning } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center text-center h-screen w-full text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mb-8"
        >
          <FaBoltLightning className="w-16 h-16 text-amber-500 mx-auto mb-6" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Tipu <span className="text-amber-500">Electrical Services</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Delivering expert electrical services with precision and safety.
          Available 24/7 for all your electrical needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="tel:+923174636995">
            <Button className="bg-amber-500 cursor-pointer text-slate-900 font-bold text-lg px-8 py-6 hover:bg-amber-600 transition-colors">
              Request Service
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
