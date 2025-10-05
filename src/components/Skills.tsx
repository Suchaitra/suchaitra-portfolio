import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Palette, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      color: "primary",
      skills: ["Java", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "Backend & APIs",
      icon: Database,
      color: "secondary",
      skills: ["Node.js", "Express.js", "MongoDB", "JDBC", "REST APIs"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "accent",
      skills: ["AWS", "Docker", "Kubernetes", "Power BI"],
    },
    {
      category: "Frontend & Design",
      icon: Palette,
      color: "primary",
      skills: ["React.js", "EJS", "Figma",  "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-primary/30">
            Technical Expertise
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = category.color === 'primary' ? 'text-primary' : 
                              category.color === 'secondary' ? 'text-secondary' : 
                              'text-accent';
            const bgClass = category.color === 'primary' ? 'from-primary/10 to-primary/5' : 
                           category.color === 'secondary' ? 'from-secondary/10 to-secondary/5' : 
                           'from-accent/10 to-accent/5';
            
            return (
              <div
                key={index}
                className="group relative p-8 bg-card rounded-3xl border-2 border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex p-5 bg-gradient-to-br ${bgClass} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className={`h-10 w-10 ${colorClass}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">{category.category}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section with enhanced design */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group relative p-8 bg-gradient-primary rounded-3xl text-white animate-scale-in overflow-hidden">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Code2 className="h-8 w-8 mb-4 opacity-80" />
              <p className="text-6xl font-bold mb-3">4+</p>
              <p className="text-sm opacity-90 uppercase tracking-wide">Technologies Mastered</p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-gradient-secondary rounded-3xl text-white animate-scale-in overflow-hidden" style={{ animationDelay: "0.1s" }}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Database className="h-8 w-8 mb-4 opacity-80" />
              <p className="text-6xl font-bold mb-3">8.75</p>
              <p className="text-sm opacity-90 uppercase tracking-wide">Academic GPA</p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-card border-2 border-accent/30 rounded-3xl animate-scale-in hover:shadow-2xl hover:border-accent transition-all duration-500 overflow-hidden" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Briefcase className="h-8 w-8 mb-4 text-accent" />
              <p className="text-6xl font-bold mb-3 text-accent">1+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Internship Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;