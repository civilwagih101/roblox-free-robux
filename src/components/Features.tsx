import { Users, Building, Rocket } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiplayer Fun",
      description: "Play and connect with millions of players worldwide",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Create & Build",
      description: "Design your own games and experiences",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Endless Adventures",
      description: "Explore thousands of unique games and worlds",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Players Love Roblox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 text-center transform transition-all hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};