import { Shield, BookOpen, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Acceso Centralizado a Normativas Digitales
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Encuentra todas las normativas, leyes y estándares relacionados con el manejo ético y legal 
            de la información en un solo lugar. Diseñado para facilitar el cumplimiento normativo y 
            la gestión profesional de datos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Protección de Datos</h3>
              <p className="text-muted-foreground">
                Normativas mexicanas para el manejo seguro de información personal
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Estándares Internacionales</h3>
              <p className="text-muted-foreground">
                ISO, COBIT, NIST y otros marcos de referencia global
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aspectos Éticos</h3>
              <p className="text-muted-foreground">
                Principios y buenas prácticas para el uso responsable de datos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;