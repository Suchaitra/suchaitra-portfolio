import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      company: "Bosch Global Software Technologies",
      role: "Transport Data Management Intern",
      duration: "Jun 2025 - Aug 2025",
      achievements: [
        "Automated data reporting workflows using SQL and Power BI",
        "Integrated and synchronized transport and logistics data",
        "Improved reporting efficiency by 40%"
      ]
    },
    {
      company: "Vision Print Technologies (RevaNest)",
      role: "Frontend & Backend Developer Intern",
      duration: "Feb 2025 - May 2025",
      achievements: [
        "Developed PWA for document upload and printing",
        "Improved efficiency and reduced user errors by 35%",
        "Enhanced data security using cloud storage solutions"
      ]
    }
  ];

  return (
    <section id="experiences" className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="px-6 py-2 mb-6 border-primary/30">
            <Briefcase className="h-4 w-4 mr-2 text-primary" />
            Professional Journey
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world experience building impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-3xl border-2 border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <Badge variant="secondary" className="text-sm">
                  {exp.role}
                </Badge>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;