"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Commercial Office Complex",
      category: "Commercial",
      image: "https://dummyimage.com/600x400/333/fff",
      description: "Complete electrical system installation for a 10-story office building including power distribution, lighting, and emergency systems.",
      featured: true,
    },
    {
      title: "Luxury Residential Development",
      category: "Residential",
      image: "https://dummyimage.com/600x400/444/fff",
      description: "Smart home electrical solutions for a 25-unit luxury apartment complex with automated lighting and security systems.",
      featured: true,
    },
    {
      title: "Manufacturing Plant Upgrade",
      category: "Industrial",
      image: "https://dummyimage.com/600x400/555/fff",
      description: "Modernization of electrical infrastructure for a large manufacturing facility to improve efficiency and safety.",
      featured: false,
    },
    {
      title: "Shopping Mall Renovation",
      category: "Commercial",
      image: "https://dummyimage.com/600x400/666/fff",
      description: "Electrical system overhaul for a 50,000 sq ft shopping center including energy-efficient lighting installation.",
      featured: false,
    },
    {
      title: "Hospital Emergency Power",
      category: "Healthcare",
      image: "https://dummyimage.com/600x400/777/fff",
      description: "Installation of backup generator systems and critical power infrastructure for a regional hospital.",
      featured: true,
    },
    {
      title: "Solar Integration Project",
      category: "Renewable Energy",
      image: "https://dummyimage.com/600x400/888/fff",
      description: "Integration of solar power systems with existing electrical infrastructure for a corporate campus.",
      featured: false,
    },
  ];

  const categories = ["All", "Commercial", "Residential", "Industrial", "Healthcare", "Renewable Energy"];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-white py-16">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://dummyimage.com/1600x900/000/fff"
          alt="Electrical projects background"
          className="object-cover object-center opacity-20 h-full w-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 px-4 max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-amber-500">Projects</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our portfolio of successful electrical projects across various sectors, showcasing our expertise and commitment to excellence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="z-10 flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className={index === 0 
              ? "bg-amber-500 text-slate-900 hover:bg-amber-600" 
              : "border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-900"
            }
          >
            {category}
          </Button>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 px-4 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500 transition-all duration-300 group"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-amber-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4 flex items-center bg-slate-900/80 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-amber-500 mr-1 fill-amber-500" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 w-full"
              >
                View Details <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
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
          View All Projects
        </Button>
      </motion.div>
    </section>
  );
}
