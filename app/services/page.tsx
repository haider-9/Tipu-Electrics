"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Home,
  Building2,
  Factory,
  Shield,
  PenTool,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-amber-500" />,
      title: "Residential Wiring",
      description:
        "Complete home electrical solutions including new installations, rewiring, and upgrades.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-amber-500" />,
      title: "Commercial Services",
      description:
        "Electrical systems for offices, retail spaces, and commercial buildings.",
    },
    {
      icon: <Factory className="w-10 h-10 text-amber-500" />,
      title: "Industrial Electrical",
      description:
        "Heavy-duty electrical work for manufacturing and industrial facilities.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-amber-500" />,
      title: "Lighting Installation",
      description:
        "Modern lighting solutions for enhanced ambiance and energy efficiency.",
    },
    {
      icon: <Shield className="w-10 h-10 text-amber-500" />,
      title: "Safety Inspections",
      description:
        "Comprehensive electrical safety audits and certification services.",
    },
    {
      icon: <PenTool className="w-10 h-10 text-amber-500" />,
      title: "Maintenance & Repairs",
      description:
        "Quick and reliable repairs for all electrical issues and regular maintenance.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center mt-10 justify-center min-h-screen w-full text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 px-4 max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-amber-500">Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We provide comprehensive electrical solutions for residential,
          commercial, and industrial needs with a focus on quality and safety.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 px-4 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4 p-4 bg-slate-800 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <Button
              variant="outline"
              className="mt-auto border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900"
            >
              Learn More
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="z-10 mt-16 text-center"
      >
        <Button className="bg-amber-500 text-slate-900 font-bold text-lg px-8 py-6 hover:bg-amber-600 transition-colors">
          Request a Quote
        </Button>
      </motion.div>
    </section>
  );
}
