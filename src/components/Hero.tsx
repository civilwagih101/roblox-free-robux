import { Gamepad, Download } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary-DEFAULT to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] opacity-20 bg-cover bg-center mix-blend-overlay" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
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
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-lg md:text-xl font-semibold px-12 py-5 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ring-2 ring-white/10"
          >
            <Download className="w-6 h-6" />
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};