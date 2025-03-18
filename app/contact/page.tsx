"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { FaBoltLightning } from "react-icons/fa6";

export default function Contact() {
  // Lahore coordinates
  const coordinates = {
    lat: 31.436526,
    lng: 74.327987,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const openGoogleMapsDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}&travelmode=driving`,
      "_blank"
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-white py-16 px-4 overflow-hidden">
      {/* Background elements */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 px-4 max-w-7xl mx-auto text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <FaBoltLightning className="w-16 h-16 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Get in <span className="text-amber-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We are ready to power your electrical needs in Lahore. Reach out for
          quotes, services, or emergency assistance.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto z-10 max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            {/* Phone Card */}
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-amber-500/20 p-3 rounded-lg mr-4 group-hover:bg-amber-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm mb-1">Main Office:</p>
                  <p className="text-lg font-medium mb-2">0317-4636995</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-amber-500/20 p-3 rounded-lg mr-4 group-hover:bg-amber-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-lg font-medium mb-2">
                    tipu672888@gmail.com
                  </p>
                </div>
              </div>
            </div>

      
            {/* Hours Card */}
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-amber-500/20 p-3 rounded-lg mr-4 group-hover:bg-amber-500/30 transition-colors">
                  <Calendar className="w-6 h-6 text-amber-500" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday:</span>
                      <span className="text-amber-500 font-medium">
                        9:00 AM - 7:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday:</span>
                      <span className="text-amber-500 font-medium">
                        10:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday:</span>
                      <span className="text-amber-500 font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-green-400">
                      24/7 Emergency Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl overflow-hidden h-full"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-amber-500 mr-3" />
              Find Us in Lahore
            </h3>
            <div className="h-[500px] w-full rounded-lg overflow-hidden relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5775006606364!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI2JzExLjUiTiA3NMKwMTknNDAuOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Tipu Electrics Location"
              ></iframe>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-300">
                <span className="font-semibold text-amber-500">
                  Tipu Electrics
                </span>{" "}
                - Your trusted electrical service provider
              </p>
              <Button
                className="bg-amber-500 text-slate-900 hover:bg-amber-600 transition-colors w-full sm:w-auto"
                onClick={openGoogleMapsDirections}
              >
                <MapPin className="w-4 h-4 mr-2" /> Get Directions
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
