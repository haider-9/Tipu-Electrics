import React from 'react';

const Services = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">WHAT WE OFFER</span>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Our Premium Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Tipu Electric provides professional electrical services with a focus on safety, quality, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Electrical Installation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Professional electrical installation services for residential and commercial properties, ensuring safety and compliance with regulations.</p>
            <a href="#" className="text-blue-600 font-medium flex items-center group-hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">Electrical Repairs</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Quick and reliable repair services for all electrical issues, from minor fixes to major electrical system repairs.</p>
            <a href="#" className="text-green-600 font-medium flex items-center group-hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-yellow-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Lighting Solutions</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Expert installation and maintenance of indoor and outdoor lighting systems, including LED upgrades and smart lighting solutions.</p>
            <a href="#" className="text-yellow-600 font-medium flex items-center group-hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">Emergency Services</h3>
            <p className="text-gray-600 leading-relaxed mb-4">24/7 emergency electrical services to address urgent electrical problems and ensure your safety and peace of mind.</p>
            <a href="#" className="text-red-600 font-medium flex items-center group-hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        
        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Smart Home Integration</h3>
              <p className="text-gray-600 leading-relaxed">Transform your home with cutting-edge smart electrical systems, including voice-controlled lighting, automated thermostats, and integrated security solutions.</p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Maintenance Plans</h3>
              <p className="text-gray-600 leading-relaxed">Regular electrical system maintenance to prevent issues, extend equipment life, and ensure optimal performance of your electrical infrastructure.</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-amber-300/20 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to get started?</h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">Contact Tipu Electric today for a free consultation and estimate on your electrical project.</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-md">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
