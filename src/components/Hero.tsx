import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Code2, Database, Cloud } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full blur-[100px] opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-secondary rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4 py-20" style={{ maxWidth: '1100px' }}>
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge without sparkle */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Welcome to my Portfolio
              </span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground">Hello,</span>
                <span className="block">I'm{" "}</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Suchaitra
                </span>
              </h1>
              
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold">
                  Computer Science Engineer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  GPA 8.75
                </Badge>
              </div>
            </div>
            
            {/* Description with better spacing */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Passionate about building <span className="text-foreground font-semibold">scalable applications</span> with 
              expertise in cloud computing, database administration, and backend development.
            </p>
            
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors">
                <Cloud className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AWS Cloud</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-secondary/50 transition-colors">
                <Code2 className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-accent/50 transition-colors">
                <Database className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
            </div>
            
            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 backdrop-blur-sm bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
            
            {/* Social links with glassmorphism */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                <a href="https://github.com/Suchaitra/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:scale-110">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/suchaitramanchal/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/10 hover:text-secondary transition-all hover:scale-110">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:suchaitramanchal@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent transition-all hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image with modern effects */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end">
            {/* Glow effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-gradient-primary rounded-full blur-[100px] opacity-30 animate-pulse" />
            </div>
            
            {/* Main image container */}
            <div className="relative group">
              {/* Rotating border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-sm opacity-75 group-hover:opacity-100 animate-spin-slow" />
              
              {/* Image */}
              <div className="relative w-80 h-80">
                <img
                  src={profilePicture}
                  alt="Suchaitra Manchal"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-background"
                />
                
                {/* Glassmorphic overlay on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating tech stack icons */}
              <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-primary/20 animate-float">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
                <Code2 className="h-8 w-8 text-secondary" />
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-card/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-accent/20 animate-float" style={{ animationDelay: "1.5s" }}>
                <Database className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;