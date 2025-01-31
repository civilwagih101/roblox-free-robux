import { Gamepad, Download } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-secondary-DEFAULT to-accent overflow-hidden">
      {/* Game-themed background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      
      {/* Animated floating game elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating cubes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-lg rotate-45 animate-[float_6s_ease-in-out_infinite] blur-sm" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/20 rounded-lg -rotate-12 animate-[float_8s_ease-in-out_infinite] delay-300 blur-sm" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Particle effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/10 blur-lg rounded-full" />
            <Gamepad className="w-20 h-20 mx-auto text-white relative animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Download Roblox Now & 
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Start Your Adventure!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join millions of players in an endless world of fun and creativity!
          </p>
          
          <a
            href="https://kk6.online/cl/i/o6gvwd"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white text-lg md:text-xl font-semibold px-12 py-5 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ring-2 ring-white/10"
          >
            <Download className="w-6 h-6" />
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};