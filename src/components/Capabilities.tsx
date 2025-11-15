import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Shield, Zap, Eye } from "lucide-react";

const capabilities = [
  {
    icon: Radar,
    title: "Autonomous Navigation",
    description: "AI-powered flight control systems with real-time obstacle avoidance and adaptive mission planning for complex operational environments."
  },
  {
    icon: Shield,
    title: "Military-Grade Design",
    description: "Rugged construction built to withstand extreme conditions. Meets and exceeds MIL-STD specifications for reliability and durability."
  },
  {
    icon: Eye,
    title: "Advanced Surveillance",
    description: "Multi-sensor payloads including thermal imaging, high-resolution optical cameras, and real-time data transmission capabilities."
  },
  {
    icon: Zap,
    title: "Extended Endurance",
    description: "Optimized power systems providing industry-leading flight times with hot-swappable battery technology for continuous operations."
  }
];

const Capabilities = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for excellence across every mission parameter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {capability.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
