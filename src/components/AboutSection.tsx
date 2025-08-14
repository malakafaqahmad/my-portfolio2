import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Globe, Briefcase } from "lucide-react";
import { Terminal } from "./Terminal";

export const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "0+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "5+" },
    { label: "Bugs Squashed", value: "∞" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a developer who lives in Linux, thrives in the shadows of dark mode because light lures the bugs in and keeps the Windows sealed shut, like a vault. Computers and air conditioners both become useless when you open them.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I hunt down bugs like they owe me money, I chase bugs like you chase that fine shyyyt at midnight — and when I catch them, I don’t just fix them… I make sure they never come back.
            </p>  

            <p className="text-lg italic text-gray-400 leading-relaxed">
              You want ordinary? Look somewhere else.
              <br />
              You want results? You’re in the right place.
              <br />
              By order of the Peaky Blinders.
            </p>

            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">22 years old</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Pakistani</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">afqab LLC.</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center bg-card/50 border-border/50 hover:shadow-glow transition-all duration-300">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Terminal */}
          <div className="relative animate-fade-in">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};