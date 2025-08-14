import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">Afaq Ahmad</div>
            <p className="text-muted-foreground">
              Building digital experiences that matter
            </p>
          </div>

          <div className="flex space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/malakafaqahmad" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-3"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </Button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/afaq-ahmad-283884267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-3"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </Button>
            </a>

            {/* Email */}
            <a href="mailto:malakafaqahmad@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-3"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </Button>
            </a>

            {/* Kaggle */}
            <a
              href="https://www.kaggle.com/malakafaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <path d="M4.5 3.75a.75.75 0 01.75-.75H7a.75.75 0 01.53.22l7.69 7.78a.75.75 0 010 1.06l-7.69 7.78a.75.75 0 01-1.28-.53v-2.47L11.94 12 4.5 4.47V3.75z" />
                  <path d="M18.75 3a.75.75 0 00-.75.75V20.25a.75.75 0 001.28.53l2.75-2.78a.75.75 0 00.22-.53V6.53a.75.75 0 00-.22-.53l-2.75-2.78A.75.75 0 0018.75 3z" />
                </svg>
              </Button>
            </a>
          </div>


        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center space-x-1">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by 0x61666171</span>
          </p>
        </div>
      </div>
    </footer>
  );
};