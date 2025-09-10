import NormativeCard from "@/components/NormativeCard";
import { Scale, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NormativasMexicanas = () => {
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
      purpose: "Proteger la actividad industrial y comercial del país, promover y fomentar la actividad inventiva de aplicación industrial, el mejoramiento de la calidad de los productos.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/50_010720.pdf",
      infoLink: "https://www.gob.mx/impi"
    },
    {
      title: "Ley Federal del Derecho de Autor",
      description: "Protege los derechos de los autores, artistas intérpretes y ejecutantes, así como editores de fonogramas y organismos de radiodifusión.",
      purpose: "Salvaguardar y promover el acervo cultural de la Nación; proteger los derechos de los autores, de los artistas intérpretes y ejecutantes.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf",
      infoLink: "https://www.indautor.gob.mx/"
    },
    {
      title: "Código Penal Federal",
      description: "Establece los delitos federales y sus sanciones, incluyendo delitos informáticos y contra la propiedad intelectual.",
      purpose: "Definir y sancionar conductas delictivas que afectan el orden federal, incluyendo delitos relacionados con tecnologías de la información.",
      downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/9_010720.pdf",
      infoLink: "https://www.gob.mx/segob"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-secondary rounded-xl p-8 border border-border/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Normativas Mexicanas</h1>
            <p className="text-muted-foreground">Marco jurídico nacional para la protección de datos y propiedad intelectual</p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 border border-border/30">
          <h2 className="text-lg font-semibold mb-3 text-card-foreground">Aspectos Éticos y Legales</h2>
          <p className="text-muted-foreground leading-relaxed">
            El manejo ético y legal de la información implica el cumplimiento de principios fundamentales 
            como la confidencialidad, integridad, disponibilidad, transparencia y responsabilidad en el 
            tratamiento de datos personales y corporativos según la legislación mexicana vigente.
          </p>
        </div>
      </div>

      {/* Laws Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {mexicanLaws.map((law, index) => (
          <NormativeCard key={index} {...law} />
        ))}
      </div>

      {/* Additional Info */}
      <Card className="border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Información Importante
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-accent/50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Actualizaciones Recientes</h3>
            <p className="text-sm text-muted-foreground">
              Las normativas se actualizan periódicamente. Consulte siempre las versiones más recientes en los sitios oficiales.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Cumplimiento Normativo</h3>
            <p className="text-sm text-muted-foreground">
              Es responsabilidad de cada organización implementar las medidas necesarias para cumplir con estas normativas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NormativasMexicanas;