import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Zap, Radio, Eye, Wind, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Systems = () => {
  const systems = [
    {
      icon: Shield,
      title: "Tactical Reconnaissance UAV",
      description: "Long-endurance surveillance platform with advanced EO/IR payloads",
      specs: ["24hr+ flight time", "50km+ range", "HD/Thermal imaging", "Real-time transmission"],
      image: "bg-gradient-to-br from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Strike & Precision Platform",
      description: "Military-grade delivery system with autonomous targeting capabilities",
      specs: ["Precision strikes", "AI-assisted targeting", "Multi-payload support", "Encrypted comms"],
      image: "bg-gradient-to-br from-orange-500/20 to-orange-500/5"
    },
    {
      icon: Radio,
      title: "Communication Relay System",
      description: "High-altitude platform for secure communications and network extension",
      specs: ["Extended coverage", "Secure mesh network", "Multi-band relay", "Redundant systems"],
      image: "bg-gradient-to-br from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Eye,
      title: "Intelligence Gathering Suite",
      description: "Advanced SIGINT/ELINT platform for electronic warfare operations",
      specs: ["Signal interception", "Jamming capabilities", "Wide spectrum", "Stealth operation"],
      image: "bg-gradient-to-br from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Wind,
      title: "Swarm Coordination System",
      description: "Multi-UAV orchestration platform for complex mission scenarios",
      specs: ["Swarm intelligence", "Autonomous formation", "Distributed tasks", "Fault tolerance"],
      image: "bg-gradient-to-br from-green-500/20 to-green-500/5"
    },
    {
      icon: Database,
      title: "Ground Control Station",
      description: "Comprehensive command and control platform with real-time analytics",
      specs: ["Multi-UAV control", "Mission planning", "Live analytics", "Secure cloud sync"],
      image: "bg-gradient-to-br from-red-500/20 to-red-500/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Military-grade UAV platforms engineered for precision, reliability, and mission success
            </p>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {systems.map((system, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-40 ${system.image} flex items-center justify-center transition-all duration-300`}>
                  <system.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{system.title}</CardTitle>
                  <CardDescription className="text-base">{system.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {system.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts is ready to help you find the perfect UAV solution for your mission
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover-lift hover-glow">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Systems;
