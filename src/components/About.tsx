import { GraduationCap, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const education = [
    {
      institution: "Reva University",
      degree: "B.Tech in Computer Science Engineering",
      period: "2021 - 2025",
      grade: "GPA: 8.75",
    },
    {
      institution: "Pramana PU College",
      degree: "Pre-University",
      period: "Raichur",
      grade: "78%",
    },
    {
      institution: "St. Mary's Convent School",
      degree: "10th Standard",
      period : "Raichur",
      grade: "79%",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-secondary/30">
            <TrendingUp className="h-4 w-4 mr-2 text-secondary" />
            About Me
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            My Journey &{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in technology through quality education
          </p>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl backdrop-blur-sm border border-primary/20">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2 animate-fade-in-up bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{edu.institution}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{edu.degree}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-primary">{edu.grade}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;