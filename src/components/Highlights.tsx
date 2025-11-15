import { Check } from "lucide-react";

const highlights = [
  "ISO 9001:2015 certified manufacturing with rigorous quality control at every stage",
  "Proven track record with 10,000+ successful mission hours across diverse operational theaters",
  "24/7 technical support and comprehensive training programs for seamless deployment"
];

const Highlights = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
            Why VyomGarud
          </h2>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
