import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_ucz5t5m';
const EMAILJS_TEMPLATE_ID = 'template_tqhwpig';
const EMAILJS_PUBLIC_KEY = 'Ab2DnrgN4fYVBhwYW';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Form submitted with data:', formData);

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Suchaitra',
        }
      );

      console.log('EmailJS SUCCESS:', response);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again or contact me directly via email.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suchaitramanchal@gmail.com",
      link: "mailto:suchaitramanchal@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7204678329",
      link: "tel:+917204678329",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "suchaitramanchal",
      link: "https://www.linkedin.com/in/suchaitramanchal/",
      color: "accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Suchaitra",
      link: "https://github.com/Suchaitra/",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-primary/30">
            <MessageSquare className="h-4 w-4 mr-2 text-primary" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="relative p-10 bg-gradient-primary text-white overflow-hidden group">
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <MessageSquare className="h-8 w-8" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group/item border border-white/10"
                      >
                        <div className="p-4 bg-white/20 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm opacity-90 mb-1">{item.label}</p>
                          <p className="font-semibold text-lg">{item.value}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card>

            <Card className="relative p-10 bg-gradient-to-br from-secondary/90 to-accent/90 text-white overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="p-4 bg-white/20 rounded-2xl inline-flex mb-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Location</h4>
                <p className="opacity-90 text-lg mb-2">Bangalore, Karnataka, India</p>
                <p className="text-sm opacity-75 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Open to remote opportunities worldwide
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="relative p-10 animate-fade-in-up bg-card/50 backdrop-blur-sm border-2 overflow-hidden group" style={{ animationDelay: "0.2s" }}>
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and I'll get back to you soon.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 focus:border-primary h-12 text-base rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 focus:border-secondary h-12 text-base rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={7}
                    className="border-2 focus:border-accent resize-none text-base rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 h-14 text-base group/btn"
                >
                  <Send className="h-5 w-5 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  {isLoading ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
