import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Electrical Installation",
    description:
      "Professional electrical installation services for residential and commercial properties, ensuring safety and compliance with regulations.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    bgColor: "bg-gray-800",
    textColor: "text-blue-400",
    image: "https://dummyimage.com/500",
  },
  {
    title: "Electrical Repairs",
    description:
      "Quick and reliable repair services for all electrical issues, from minor fixes to major electrical system repairs.",
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    bgColor: "bg-gray-800",
    textColor: "text-green-400",
    image: "https://dummyimage.com/500",
  },
  {
    title: "Lighting Solutions",
    description:
      "Expert installation and maintenance of indoor and outdoor lighting systems, including LED upgrades and smart lighting solutions.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    bgColor: "bg-gray-800",
    textColor: "text-yellow-400",
    image: "https://dummyimage.com/500",
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency electrical services to address urgent electrical problems and ensure your safety and peace of mind.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    bgColor: "bg-gray-800",
    textColor: "text-red-400",
    image: "https://dummyimage.com/500",
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
  bgColor,
  textColor,
  image,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center 
     p-6 rounded-lg shadow-md border  gap-6"
    >
      <div className="w-32 h-32 flex-shrink-0 rounded-md overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div>
        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gray-900">
          <svg
            className={`w-7 h-7 ${textColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={icon}
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Our Premium Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Tipu Electric provides professional electrical services with a focus
            on safety, quality, and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
