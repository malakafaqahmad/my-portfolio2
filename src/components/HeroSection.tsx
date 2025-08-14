import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import heroImage from "@/assets/afaqahmad.png";


export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 animate-glow">
              <span className="font-hacker animate-typing">&lt;code&gt; I build AI/ML Models & full-stack applications &lt;/code&gt;</span>
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
              Afaq Ahmad
            </h1>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/malakafaqahmad" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/afaq-ahmad-283884267/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:malakafaqahmad@gmail.com">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/afaqqahmd/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
                </a>
              </Button>
            </div>

          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I'm an <span className="text-primary font-semibold">AI/ML and Full Stack Developer</span>, 
              building apps that work… most of the time. Sometimes even on the first try.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              In my free time, I argue with algorithms, blame bugs on the compiler, and drink coffee like it’s a performance booster for my keyboard.
            </p>

            <div className="flex space-x-4 pt-4">
              
              <a href="/afaqahmad_resume_AI_.pdf" download>
                <Button
                  className="bg-primary hover:bg-primary-glow shadow-glow"
                  data-testid="button-download-resume"
                >
                  Download Resume
                </Button>
              </a>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-testid="button-get-in-touch"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>

          </div>

          <button 
            onClick={scrollToAbout}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors animate-float"
          >
            <span>Learn more about me</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>

        {/* Right side - Image */}
        <div className="relative animate-fade-in -mt-16">
          <img 
            src={heroImage} 
            alt="Developer workspace" 
            className="w-full rounded-2xl object-cover animate-float"
          />
          {/* Optional gradient overlay if you still want a soft effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};