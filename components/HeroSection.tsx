  import Image from 'next/image'
  import Link from 'next/link'

  export default function HeroSection() {
    return (
      <section className="min-h-screen  flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse">Welcome to ElectriCare</h1>
          <p className="max-w-2xl text-xl text-blue-100 leading-relaxed">
            Your trusted electrical service provider with over 10 years of experience in residential and commercial electrical solutions. We pride ourselves on safety, reliability, and exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6">
            <Link
              href="/services"
              className="rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-blue-900 hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-yellow-400 px-8 py-3 text-lg font-semibold text-yellow-400 hover:bg-blue-800/50 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
        <div className="relative h-64 w-64 md:h-96 md:w-96 shadow-xl rounded-full overflow-hidden ring-4 ring-yellow-400 animate-glow">
          <img
            src="https://dummyimage.com/500"
            alt="Store Front"
            className="rounded-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </section>
    )
  }