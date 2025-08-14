import { useLocation } from "wouter";
import { useEffect } from "react";
import { Link } from "wouter";

const NotFound = () => {
  const [location] = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background" data-testid="page-notfound">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-404">404</h1>
        <p className="text-xl text-muted-foreground mb-4" data-testid="text-notfound-message">Oops! Page not found</p>
        <Link 
          href="/" 
          className="text-primary hover:text-primary/80 underline"
          data-testid="link-home"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
