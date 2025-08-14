import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "JavaScript", "TypeScript"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "AI/ML",
      skills: ["Pytorch", "NLP", "CV", "RAGS", "Finetunnig", "HuggingFace"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Sqlite", "Firebase", "iOS", "Android", "Supabase"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I have experience working with a wide range of technologies and tools. 
            Here are some of the technologies I'm passionate about and proficient in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className={`${category.color} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="p-6 bg-card/50 border-border/50">
                      <h4 className="text-xl font-semibold text-primary">Intern Full Stack Developer</h4>
                      <p className="text-muted-foreground">Veevo Tech</p>
                      <p className="text-sm text-muted-foreground mt-2">2025 - Present</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-muted-foreground">
                    Contributed to cutting-edge software solutions as an intern at Veevo Tech, enhancing product features and performance
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-muted-foreground">
                      Built responsive web applications and Mobile app for Installments based buying and selling of products using Flutter, React, Node.js, GraphQL and PostgreSQL.
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-card/50 border-border/50">
                      <h4 className="text-xl font-semibold text-primary">Flopped Founder & CEO</h4>
                      <p className="text-muted-foreground">Startup</p>
                      <p className="text-sm text-muted-foreground mt-2">2025 - present</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};