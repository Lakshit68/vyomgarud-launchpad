const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">VyomGarud</h3>
            <p className="text-sm text-muted-foreground">
              Advanced UAV Systems
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VyomGarud. All rights reserved.</p>
            <p className="mt-1">Precision Engineering. Advanced Autonomy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
