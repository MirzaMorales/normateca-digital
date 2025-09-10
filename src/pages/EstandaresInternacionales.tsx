import NormativeCard from "@/components/NormativeCard";
import { BookOpen, Globe, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EstandaresInternacionales = () => {
  const internationalStandards = [
    {
      title: "ISO 27001 - Sistemas de Gestión de Seguridad de la Información",
      description: "Estándar internacional para establecer, implementar, mantener y mejorar un sistema de gestión de seguridad de la información.",
      purpose: "Proporcionar un enfoque sistemático para gestionar la información sensible de la empresa de manera que se mantenga segura, incluyendo procesos, controles, políticas y procedimientos.",
      infoLink: "https://www.iso.org/isoiec-27001-information-security.html"
    },
    {
      title: "ISO 17799 - Código de Práctica para la Gestión de Seguridad",
      description: "Proporciona directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de seguridad de la información.",
      purpose: "Establecer directrices y principios generales para la gestión de seguridad de la información en una organización, proporcionando un marco de referencia.",
      infoLink: "https://www.iso.org/standard/39612.html"
    },
    {
      title: "COBIT - Control Objectives for Information and Related Technologies",
      description: "Marco de gobierno y gestión de TI empresarial que ayuda a las organizaciones a crear valor óptimo desde TI.",
      purpose: "Proporcionar un marco integral que ayuda a las empresas a lograr sus objetivos para el gobierno y la gestión de TI empresarial.",
      infoLink: "https://www.isaca.org/resources/cobit"
    },
    {
      title: "NIST - National Institute of Standards and Technology",
      description: "Marco de ciberseguridad desarrollado por NIST que proporciona estándares, directrices y mejores prácticas.",
      purpose: "Mejorar la infraestructura de ciberseguridad crítica mediante el desarrollo de estándares, métricas, pruebas y procesos de validación.",
      infoLink: "https://www.nist.gov/cyberframework"
    },
    {
      title: "ITIL - Information Technology Infrastructure Library",
      description: "Conjunto de prácticas detalladas para la gestión de servicios de TI que se centra en alinear los servicios de TI con las necesidades del negocio.",
      purpose: "Proporcionar un enfoque sistemático para la entrega de servicios de TI de calidad, mejorando la eficiencia operacional y la satisfacción del cliente.",
      infoLink: "https://www.axelos.com/best-practice-solutions/itil"
    }
  ];

  const categories = [
    {
      title: "Seguridad de la Información",
      description: "Estándares enfocados en proteger la confidencialidad, integridad y disponibilidad de la información.",
      icon: "🔒",
      standards: ["ISO 27001", "ISO 17799", "NIST"]
    },
    {
      title: "Gobierno de TI",
      description: "Marcos para la gestión y gobierno efectivo de tecnologías de información.",
      icon: "⚖️",
      standards: ["COBIT"]
    },
    {
      title: "Gestión de Servicios",
      description: "Mejores prácticas para la entrega y gestión de servicios de TI.",
      icon: "🛠️",
      standards: ["ITIL"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-secondary rounded-xl p-8 border border-border/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Estándares Internacionales</h1>
            <p className="text-muted-foreground">Marcos de referencia globales para la gestión y seguridad de la información</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border/30">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-card-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <div className="flex flex-wrap gap-1">
                {category.standards.map((standard, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standards Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {internationalStandards.map((standard, index) => (
          <NormativeCard key={index} {...standard} />
        ))}
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Beneficios de la Implementación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Reducción de Riesgos</h4>
                <p className="text-sm text-muted-foreground">Minimiza vulnerabilidades y amenazas de seguridad</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Cumplimiento Regulatorio</h4>
                <p className="text-sm text-muted-foreground">Facilita el cumplimiento de normativas legales</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Mejora Operacional</h4>
                <p className="text-sm text-muted-foreground">Optimiza procesos y eficiencia organizacional</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Reconocimiento Internacional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Credibilidad Global</h4>
                <p className="text-sm text-muted-foreground">Reconocimiento en mercados internacionales</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Ventaja Competitiva</h4>
                <p className="text-sm text-muted-foreground">Diferenciación en el mercado</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-medium">Confianza del Cliente</h4>
                <p className="text-sm text-muted-foreground">Mayor confianza de stakeholders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EstandaresInternacionales;