import { Shield, Users, Gift } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Safe & Secure",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Millions of Downloads",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      text: "100% Free",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              {badge.icon}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};