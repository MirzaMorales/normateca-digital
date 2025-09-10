import { FileText, Scale } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <Scale className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Normateca Digital</h1>
            <p className="text-primary-foreground/80 text-sm">
              Portal de Normativas y Estándares de Información
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;