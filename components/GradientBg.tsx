"use client";

export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black pointer-events-none">
      {/* More visible electricity-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/50 via-blue-800/40 to-black opacity-90" />
      
      {/* Brighter overlay with electric colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 via-blue-600/15 to-yellow-300/20" />
      
      {/* Electric accent at the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-radial from-blue-300/40 via-cyan-400/20 to-transparent blur-xl" />
      
      {/* Lightning bolt shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[250px] sm:h-[350px] md:h-[425px] lg:h-[500px] bg-gradient-to-b from-yellow-300/30 via-blue-400/30 to-cyan-300/20 blur-[3px]"
        style={{
          clipPath: "polygon(50% 0%, 0% 50%, 40% 50%, 10% 100%, 90% 40%, 50% 40%, 100% 0%)"
        }}
      />
    </div>
  );
}
