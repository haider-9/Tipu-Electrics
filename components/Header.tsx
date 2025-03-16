import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gradient-to-r from-blue-700 via-purple-800 to-blue-800 shadow-lg">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Tipu Electrics
        </h1>
      </div>
      <nav className="flex items-center gap-6">
        <Button variant="ghost" className="text-white hover:bg-blue-800">Home</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-800">Services</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-800">About Us</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-800">Projects</Button>
        <Button variant="default" className="bg-yellow-600 hover:bg-yellow-700 text-white">Contact Us</Button>
      </nav>
    </header>
  );
}