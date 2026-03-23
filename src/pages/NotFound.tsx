import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const NotFound = () => {
  useSEO("404 Not Found | Oleh Mordach", "The page you are looking for does not exist.");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
