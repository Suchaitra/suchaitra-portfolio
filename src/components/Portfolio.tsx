import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Revised GAN-Based Eyeglass Removal",
      period: "Nov 2024 - May 2025",
      description: "Developed an advanced GAN framework for removing eyeglasses from facial images, optimizing the encoder-decoder architecture for improved accuracy.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
      outcomes: [
        "Improved facial recognition accuracy by 30%",
        "Optimized model architecture for better performance",
        "Successfully processed diverse facial datasets",
      ],
      category: "Machine Learning",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "News Hub",
      period: "May 2024 - Jul 2024",
      description: "Built a responsive web application integrating multiple news APIs with advanced filtering capabilities and intuitive user interface.",
      technologies: ["React.js", "Node.js", "New API", "Bootstrap"],
      outcomes: [
        "Improved user navigation by 60%",
        "Real-time news updates from multiple sources",
        "Category filtering and keyword search functionality",
      ],
      category: "Web Development",
      gradient: "from-secondary/10 to-secondary/5",
    },
    
    
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--secondary)/0.1),transparent_50%),radial-gradient(circle_at_30%_70%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-secondary/30">
            <Folder className="h-4 w-4 mr-2 text-secondary" />
            My Work
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 animate-fade-in-up bg-gradient-to-br ${project.gradient} backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <Badge className="bg-gradient-primary text-white shadow-lg">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full border">
                    {project.period}
                  </span>
                </div>
                
                {/* Title with icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-card rounded-xl border shadow-sm">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Outcomes */}
                <div className="mb-8">
                  <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Key Outcomes
                  </p>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm p-2 rounded-lg hover:bg-card/50 transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-gradient-primary hover:text-white hover:border-primary transition-all duration-300 group"
            onClick={() => window.open('https://github.com/Suchaitra/', '_blank')}
          >
            <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
            View More on GitHub
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
