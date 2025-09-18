import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, BookOpen, Shield, FileText, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AspectosEticosLegales from "@/components/AspectosEticosLegales";

const Index = () => {
  const quickAccess = [
    {
      title: "Normativas Mexicanas",
      description: "Leyes y reglamentos nacionales para protección de datos",
      icon: Scale,
      link: "/normativas-mexicanas",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Estándares Internacionales",
      description: "Marcos de referencia globales como ISO, COBIT, NIST",
      icon: BookOpen,
      link: "/estandares",
      color: "bg-accent/50 text-accent-foreground"
    },
    {
      title: "Aviso de Privacidad",
      description: "Información sobre el tratamiento de datos personales",
      icon: Shield,
      link: "/privacidad",
      color: "bg-secondary/70 text-secondary-foreground"
    }
  ];

  const stats = [
    { label: "Normativas Disponibles", value: "9", icon: FileText },
    { label: "Estándares Internacionales", value: "5", icon: BookOpen },
    { label: "Enlaces Oficiales", value: "14", icon: ExternalLink },
  ];

  return (
    <div className="pl-9 space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-xl p-8 overflow-hidden border border-border/50">
        <img
    src="/images/img.jpeg" 
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

 {/* Capa oscura */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Icono decorativo translúcido */}
  <Shield className="absolute right-10 top-10 text-white/10 w-40 h-40" />

  {/* Contenido principal */}
  <div className="relative p-8 lg:p-12 max-w-4xl">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-5 bg-primary/30 rounded-xl shadow-lg">
        <Scale className="h-10 w-10 text-primary text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 text-black/80">
                Normateca Digital
              </h1>
              <p className="text-xl text-muted-foreground text-white/60">
                Portal Centralizado de Normativas de Información
              </p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8  leading-relaxed max-w-3xl text-justify text-white/90">
            Accede fácilmente a todas las normativas mexicanas e internacionales relacionadas con 
            el manejo ético y legal de la información. Encuentra leyes, estándares y marcos de 
            referencia organizados para facilitar el cumplimiento normativo.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-xl">
              <Link to="/normativas-mexicanas">
                Explorar Normativas
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link to="/estandares">
                Ver Estándares
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center border-border/80 shadow-card hover:shadow-card-hover transition-smooth">
            <CardContent className="pt-10">
              <div className="flex justify-center mb-3">
                <div className="p-7 bg-primary/10 rounded-xl">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access */}
      <div>
        <AspectosEticosLegales />

        <h2 className="text-2xl font-bold text-foreground mb-6 mt-6">Acceso Rápido</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/80 shadow-card">
              <CardHeader>
                <div className={`p-3 ${item.color} rounded-xl w-fit mb-3`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full justify-between rounded-lg">
                  <Link to={item.link}>
                    Acceder
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <Card className="border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="text-xl">¿Qué encontrarás en este portal?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Normativas Mexicanas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ley General de Protección de Datos Personales</li>
                <li>• Ley de Propiedad Industrial</li>
                <li>• Ley Federal de Derechos de Autor</li>
                <li>• Código Penal Federal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Estándares Internacionales</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ISO 27001 - Gestión de Seguridad</li>
                <li>• COBIT - Gobierno de TI</li>
                <li>• NIST - Marco de Ciberseguridad</li>
                <li>• ITIL - Gestión de Servicios</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;