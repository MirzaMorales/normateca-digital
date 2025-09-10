import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NormativeCard from "@/components/NormativeCard";
import PrivacyNotice from "@/components/PrivacyNotice";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const mexicanLaws = [
    {
      title: "Ley General de Protección de Datos Personales",
      description: "Marco normativo para la protección de datos personales en posesión de sujetos obligados en México.",
      purpose: "Garantizar la privacidad y el derecho a la autodeterminación informativa de las personas, estableciendo principios y obligaciones para el tratamiento de datos personales.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
      infoLink: "https://www.inai.org.mx/SitePages/ifai-tema.aspx?t=proteccionDatosPersonales"
    },
    {
      title: "Ley de Propiedad Industrial",
      description: "Normativa que regula la protección de invenciones, marcas, diseños industriales y otros derechos de propiedad industrial.",
      purpose: "Proteger la actividad industrial y comercial del país, promover y fomentar la actividad inventiva de aplicación industrial, el mejoramiento de la calidad de los productos y el aprovechamiento de los recursos naturales y humanos.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/50_010720.pdf",
      infoLink: "https://www.gob.mx/impi"
    },
    {
      title: "Ley Federal del Derecho de Autor",
      description: "Protege los derechos de los autores, artistas intérpretes y ejecutantes, así como editores de fonogramas y organismos de radiodifusión.",
      purpose: "Salvaguardar y promover el acervo cultural de la Nación; proteger los derechos de los autores, de los artistas intérpretes y ejecutantes, y promover la creatividad intelectual.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf",
      infoLink: "https://www.indautor.gob.mx/"
    },
    {
      title: "Código Penal Federal",
      description: "Establece los delitos federales y sus sanciones, incluyendo delitos informáticos y contra la propiedad intelectual.",
      purpose: "Definir y sancionar conductas delictivas que afectan el orden federal, incluyendo delitos relacionados con tecnologías de la información y propiedad intelectual.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/9_010720.pdf",
      infoLink: "https://www.gob.mx/segob"
    }
  ];

  const internationalStandards = [
    {
      title: "ISO 27001 - Sistemas de Gestión de Seguridad de la Información",
      description: "Estándar internacional para establecer, implementar, mantener y mejorar un sistema de gestión de seguridad de la información.",
      purpose: "Proporcionar un enfoque sistemático para gestionar la información sensible de la empresa de manera que se mantenga segura, incluyendo procesos, controles, políticas, procedimientos y estructuras organizacionales.",
      infoLink: "https://www.iso.org/isoiec-27001-information-security.html"
    },
    {
      title: "ISO 17799 - Código de Práctica para la Gestión de Seguridad de la Información",
      description: "Proporciona directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de seguridad de la información.",
      purpose: "Establecer directrices y principios generales para la gestión de seguridad de la información en una organización, proporcionando un marco de referencia para implementar controles de seguridad.",
      infoLink: "https://www.iso.org/standard/39612.html"
    },
    {
      title: "COBIT - Control Objectives for Information and Related Technologies",
      description: "Marco de gobierno y gestión de TI empresarial que ayuda a las organizaciones a crear valor óptimo desde TI.",
      purpose: "Proporcionar un marco integral que ayuda a las empresas a lograr sus objetivos para el gobierno y la gestión de TI empresarial, asegurando que TI esté alineada con los objetivos del negocio.",
      infoLink: "https://www.isaca.org/resources/cobit"
    },
    {
      title: "NIST - National Institute of Standards and Technology",
      description: "Marco de ciberseguridad desarrollado por NIST que proporciona estándares, directrices y mejores prácticas.",
      purpose: "Mejorar la infraestructura de ciberseguridad crítica mediante el desarrollo de estándares, métricas, pruebas y procesos de validación para promover la innovación en seguridad.",
      infoLink: "https://www.nist.gov/cyberframework"
    },
    {
      title: "ITIL - Information Technology Infrastructure Library",
      description: "Conjunto de prácticas detalladas para la gestión de servicios de TI que se centra en alinear los servicios de TI con las necesidades del negocio.",
      purpose: "Proporcionar un enfoque sistemático para la entrega de servicios de TI de calidad, mejorando la eficiencia operacional y la satisfacción del cliente mediante mejores prácticas probadas.",
      infoLink: "https://www.axelos.com/best-practice-solutions/itil"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Aspectos Éticos y Legales */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Aspectos Éticos y Legales del Manejo de la Información
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              El manejo ético y legal de la información implica el cumplimiento de principios fundamentales 
              como la confidencialidad, integridad, disponibilidad, transparencia y responsabilidad en el 
              tratamiento de datos personales y corporativos.
            </p>
          </div>
        </section>

        <Separator />

        {/* Normativas Mexicanas */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Normativas Mexicanas
            </h2>
            <p className="text-muted-foreground">
              Marco jurídico nacional para la protección de datos y propiedad intelectual
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {mexicanLaws.map((law, index) => (
              <NormativeCard key={index} {...law} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Estándares Internacionales */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Estándares Internacionales de Manejo de Información
            </h2>
            <p className="text-muted-foreground">
              Marcos de referencia globales para la gestión y seguridad de la información
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {internationalStandards.map((standard, index) => (
              <NormativeCard key={index} {...standard} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Aviso de Privacidad */}
        <PrivacyNotice />
      </main>

      <footer className="bg-gradient-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Normateca Digital - Portal Educativo de Normativas de Información
          </p>
          <p className="text-xs opacity-75 mt-2">
            Desarrollado con fines académicos - Instituto Tecnológico Superior de Estudios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;