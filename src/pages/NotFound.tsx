
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-talentup-blue400">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">Page non trouvée</h2>
        <p className="mt-4 text-gray-600">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Button asChild className="btn-gradient">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
