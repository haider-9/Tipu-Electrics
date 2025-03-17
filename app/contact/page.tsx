"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { FaBoltLightning } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-white py-16">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://dummyimage.com/1600x900/000/fff"
          alt="Contact us background"
          className="object-cover object-center opacity-20 h-full w-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 px-4 max-w-7xl mx-auto text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mb-8"
        >
          <FaBoltLightning className="w-16 h-16 text-amber-500 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-amber-500">Us</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get in touch with our team for inquiries, quotes, or emergency electrical services. We're available 24/7.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">Main Office:</p>
                <p className="text-xl font-semibold text-white">(555) 123-4567</p>
                <p className="text-gray-300 mt-4">Emergency Service:</p>
                <p className="text-xl font-semibold text-white">(555) 987-6543</p>
              </div>
              <Button 
                className="bg-amber-500 text-slate-900 font-bold w-full hover:bg-amber-600 transition-colors"
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">General Inquiries:</p>
                <p className="text-xl font-semibold text-white">info@tipuelectrical.com</p>
                <p className="text-gray-300 mt-4">Support:</p>
                <p className="text-xl font-semibold text-white">support@tipuelectrical.com</p>
              </div>
              <Button 
                className="bg-amber-500 text-slate-900 font-bold w-full hover:bg-amber-600 transition-colors"
                onClick={() => window.location.href = 'mailto:info@tipuelectrical.com'}
              >
                Send Email
              </Button>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">Office Address:</p>
                <p className="text-xl font-semibold text-white">
                  123 Electrical Avenue<br />
                  Suite 456<br />
                  New York, NY 10001
                </p>
              </div>
              <Button 
                className="bg-amber-500 text-slate-900 font-bold w-full hover:bg-amber-600 transition-colors"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Get Directions <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg border border-slate-700"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-amber-500 mr-3" />
            <h3 className="text-2xl font-bold">Business Hours</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-slate-700 rounded-lg">
              <h4 className="font-semibold mb-2">Monday - Friday</h4>
              <p className="text-amber-500 text-lg">8:00 AM - 6:00 PM</p>
            </div>
            <div className="p-4 border border-slate-700 rounded-lg">
              <h4 className="font-semibold mb-2">Saturday</h4>
              <p className="text-amber-500 text-lg">9:00 AM - 4:00 PM</p>
            </div>
            <div className="p-4 border border-slate-700 rounded-lg">
              <h4 className="font-semibold mb-2">Sunday</h4>
              <p className="text-amber-500 text-lg">Closed</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-green-500/20 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="font-semibold text-green-400">24/7 Emergency Services Available</span>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-amber-500 p-6 rounded-lg text-slate-900 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Need Emergency Electrical Service?</h3>
          <p className="mb-6 text-lg">Our technicians are available 24/7 for urgent electrical problems.</p>
          <Button 
            className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-lg font-bold"
            onClick={() => window.location.href = 'tel:+15559876543'}
          >
            <Phone className="w-6 h-6 mr-3" /> Call Our Emergency Line
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
