import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import aiContentDetect from "@/assets/aicontentdetect.jpeg";
import attendence from "@/assets/attendence.jpg";
import cars from "@/assets/cars.jpg";
import contentVideo from "@/assets/content.png";
import ecommerce from "@/assets/ecom.jpeg";
import resume from "@/assets/resume.png";
import rms from "@/assets/rms.jpg";
import stockPrice from "@/assets/stockprice.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and Stripe integration. Features include secure user authentication, product management, and seamless payment processing.",
      image: ecommerce,
      technologies: ["React", "Node.js", "PostgreSQL", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Resume Builder",
      description: "A web application to create modern, downloadable resumes with step-based navigation and customizable templates all with the help of AI can connect to Your GITHUB and craft a resume/cover letter for any job all in one click",
      image: resume,
      technologies: ["React", "Zustand", "CSS", "LLMS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Attendance System with YOLO",
      description: "Automated attendance system using YOLO object detection to recognize and track classroom attendance in real-time.",
      image: attendence,
      technologies: ["Python", "YOLO", "Pytorch", "Roboflow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Content Creator Video App",
      description: "Mobile app built with Flet (Python) to help content creators generate shorts from long YouTube videos or uploaded videos using AI.",
      image: contentVideo,
      technologies: ["Python", "Flet", "Gemini"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-generated Text Detection",
      description: "Machine learning solution to detect AI-generated text, helping validate authenticity and prevent plagiarism.",
      image: aiContentDetect,
      technologies: ["Python", "ML", "NLP", "Finetuning", "Gemma2"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Management System (RMS)",
      description: "Backend developed in C++ for efficient restaurant management including orders, inventory, and billing.",
      image: rms,
      technologies: ["C++", "OOP", "File Handling"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Stock Price Prediction",
      description: "AI/ML-powered system to predict stock prices using historical data and machine learning models.",
      image: stockPrice,
      technologies: ["Python", "Pandas", "LSTM", "TensorFlow", "Time Series"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "YOLOv8 + RT-DETR Vehicle Detection & Counting",
      description: "A computer vision system for real-time vehicle detection and counting using YOLOv8 and RT-DETR models.",
      image: cars,
      technologies: ["Python", "YOLOv8", "RT-DETR", "OpenCV"],
      liveUrl: "#",
      githubUrl: "#"
    }

  ];


  return (
    <section id="projects" className="py-20 bg-muted/20" data-testid="section-projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-projects-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-testid="grid-projects">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6" data-testid={`list-project-technologies-${index}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div> */}
              </div>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-glow shadow-glow">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};