"use client";
import { motion } from "framer-motion";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FaBoltLightning } from "react-icons/fa6";

export default function About() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      value: "1000+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      value: "50+",
      label: "Expert Technicians"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      value: "100%",
      label: "Satisfaction Guarantee"
    }
  ];

  return (
    <section className="relative flex flex-col items-center mt-10 justify-center min-h-screen w-full text-white py-16">
 

      <div className="container mx-auto px-4 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <FaBoltLightning className="w-10 h-10 text-amber-500 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-amber-500">Us</span></h2>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 text-amber-500">
              Your Trusted Electrical Partner Since 2008
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Tipu Electrical Services has been providing top-quality electrical solutions to residential, commercial, and industrial clients for over 15 years. Founded with a commitment to excellence, we have grown to become one of the most trusted names in the industry.
              </p>
              
              <p className="text-lg">
                Our team of certified electricians brings decades of combined experience to every project. We pride ourselves on our attention to detail, commitment to safety, and dedication to customer satisfaction.
              </p>
              
              <p className="text-lg">
                Whether you need a simple repair or a complete electrical system installation, we have the expertise and equipment to get the job done right the first time.
              </p>
            </div>
          
          </motion.div>
          
          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-amber-500/30">
              <Image
                src="/Team.jpg" 
                alt="Tipu Electrical Team" 
                className="w-full h-auto"
                width={500} 
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold">Our Expert Team</h4>
                  <p className="text-gray-300">Certified professionals committed to excellence</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our <span className="text-amber-500">Values</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "We prioritize safety in every project, following the strictest industry standards and protocols."
              },
              {
                title: "Quality Workmanship",
                description: "Our technicians deliver exceptional quality with attention to detail on every installation and repair."
              },
              {
                title: "Customer Satisfaction",
                description: "We're not satisfied until you are. Your complete satisfaction is our ultimate goal."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-lg border border-slate-700 text-center"
              >
                <h4 className="text-xl font-bold mb-4 text-amber-500">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
