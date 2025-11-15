const About = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            VyomGarud is at the forefront of unmanned aerial vehicle innovation, delivering 
            cutting-edge drone systems engineered for precision, reliability, and performance 
            in the most demanding environments.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We combine advanced autonomous flight control, military-grade durability, and 
            sophisticated sensor integration to provide solutions that redefine what's possible 
            in aerial reconnaissance, surveillance, and tactical operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
