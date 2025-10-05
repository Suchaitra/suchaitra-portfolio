import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Globe, Server, Cloud, BarChart3, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design intuitive and responsive user interfaces using Figma  with modern design principles.",
      features: ["Prototyping", "User Research", "Responsive Design", "Design Systems"],
      color: "primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive, high-performance websites using React.js, HTML5, CSS3, and modern JavaScript frameworks.",
      features: ["Single Page Applications", "Progressive Web Apps", "SEO Optimization", "Cross-browser Compatibility"],
      color: "secondary",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Develop robust server-side applications with Node.js and Express.js, integrating databases for scalable solutions.",
      features: ["RESTful APIs", "Database Design",  "API Integration"],
      color: "accent",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Deploy and manage applications on AWS with support for Docker containerization and Kubernetes orchestration.",
      features: ["AWS Deployment", "Container Management", "CI/CD Pipelines"],
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Create interactive dashboards using Power BI, transforming complex data into actionable business intelligence.",
      features: ["Custom Dashboards", "Real-time Analytics", "Data Modeling", "Report Automation"],
      color: "secondary",
    },
    
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-primary/30">
            <Server className="h-4 w-4 mr-2 text-primary" />
            What I Offer
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Services &{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions from design to deployment, tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = service.color === 'primary' ? 'text-primary' : 
                              service.color === 'secondary' ? 'text-secondary' : 
                              'text-accent';
            const bgClass = service.color === 'primary' ? 'from-primary/10 to-primary/5' : 
                           service.color === 'secondary' ? 'from-secondary/10 to-secondary/5' : 
                           'from-accent/10 to-accent/5';
            const borderClass = service.color === 'primary' ? 'border-primary/20' : 
                               service.color === 'secondary' ? 'border-secondary/20' : 
                               'border-accent/20';
            
            return (
              <Card
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${bgClass} hover:shadow-2xl transition-all duration-500 border-2 ${borderClass} hover:border-opacity-50 hover:-translate-y-3 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className={`inline-flex p-5 bg-card rounded-2xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg border ${borderClass}`}>
                    <Icon className={`h-8 w-8 ${colorClass}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className={`w-1.5 h-1.5 ${colorClass} rounded-full`} />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
