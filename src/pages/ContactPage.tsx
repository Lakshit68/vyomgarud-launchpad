import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your UAV requirements? Our team of experts is here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <Input 
                        id="firstName"
                        placeholder="John" 
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <Input 
                        id="lastName"
                        placeholder="Doe" 
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com" 
                      className="bg-secondary border-border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+91 123-456-7890" 
                      className="bg-secondary border-border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input 
                      id="company"
                      placeholder="Your Organization" 
                      className="bg-secondary border-border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your UAV requirements and mission objectives..." 
                      rows={6}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
                  >
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-slide-in">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Reach out through any of these channels and our team will respond promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Email</h3>
                      <p className="text-muted-foreground mb-1">info@vyomgarud.com</p>
                      <p className="text-muted-foreground">sales@vyomgarud.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                      <p className="text-muted-foreground mb-1">+91 (0) 123-456-7890</p>
                      <p className="text-muted-foreground text-sm">Direct line to our team</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Business Hours</h3>
                      <p className="text-muted-foreground mb-1">Monday - Friday</p>
                      <p className="text-muted-foreground text-sm">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Aerospace Innovation Park<br />
                        Bangalore, Karnataka 560100<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
