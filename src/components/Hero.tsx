import { Gamepad } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary-DEFAULT via-primary to-secondary-DEFAULT overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 text-center relative animate-fade-up">
        <Gamepad className="w-16 h-16 mx-auto mb-8 text-white" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Download Roblox Now & Start Your Adventure!
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join millions of players in an endless world of fun and creativity!
        </p>
        <a
          href="https://kk6.online/cl/i/o6gvwd"
          className="inline-block bg-destructive text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-lg transform transition-all hover:scale-105 hover:brightness-110"
        >
          Download Now
        </a>
      </div>
    </div>
  );
};