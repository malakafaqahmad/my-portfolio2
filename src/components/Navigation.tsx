import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary" data-testid="text-logo">Afaq Ahmad</div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-nav-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-nav-skills"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-nav-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-nav-contact"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Github */}
          <a
            href="https://github.com/malakafaqahmad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" data-testid="button-github">
              <Github className="h-5 w-5" />
            </Button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/afaq-ahmad-283884267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" data-testid="button-linkedin">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>

          {/* Email */}
          <a href="mailto:malakafaqahmad@gmail.com">
            <Button variant="ghost" size="icon" data-testid="button-email">
              <Mail className="h-5 w-5" />
            </Button>
          </a>

          {/* Resume Download */}
          <a href="/afaqahmad_resume_AI_.pdf" download>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              data-testid="button-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>

      </div>
    </nav>
  );
};