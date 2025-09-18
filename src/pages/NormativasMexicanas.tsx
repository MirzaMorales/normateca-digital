import NormativeCard from "@/components/NormativeCard";
import { Scale, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NormativasMexicanas = () => {
const mexicanLaws = [
  {
    title: "Ley General de Protección de Datos Personales",
    description: "Es una ley mexicana que regula el tratamiento y resguardo de los datos personales por parte de instituciones públicas, con el fin de proteger la privacidad de los ciudadanos. Establece principios básicos como la licitud, consentimiento, calidad, finalidad, lealtad, proporcionalidad y responsabilidad en el uso de datos. Su aplicación busca asegurar que las dependencias gubernamentales, organismos autónomos y cualquier sujeto obligado manejen la información de los ciudadanos con transparencia, seguridad y respeto a los derechos humanos. Esta normativa es fundamental en una era donde la digitalización y el uso de tecnologías de la información hacen cada vez más vulnerables los datos de las personas.",
    purpose: "Proteger la privacidad y el derecho a la autodeterminación informativa de las personas, garantizando que sus datos no sean utilizados sin autorización ni de manera indebida. Además, busca generar confianza entre los ciudadanos y las instituciones públicas, fomentar la transparencia y establecer un equilibrio entre el acceso a la información pública y la protección de datos sensibles. Su propósito también incluye la creación de mecanismos de vigilancia y sanciones para quienes incumplan la normativa, fortaleciendo así la cultura de respeto hacia los datos personales en México.",
    downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
    infoLink: "https://comisionacionaldebusqueda.gob.mx/proteccion-datos/"
  },
  {
    title: "Ley de Propiedad Industrial",
    description: "Es la legislación que establece los mecanismos legales para reconocer, proteger y regular la propiedad industrial en México, incluyendo invenciones, patentes, marcas, modelos de utilidad y diseños industriales. Esta ley protege tanto a los creadores como a las empresas al otorgar derechos exclusivos sobre sus innovaciones y signos distintivos. De igual manera, promueve un ambiente competitivo y ordenado en el mercado, evitando la competencia desleal y el uso indebido de creaciones registradas. Su existencia resulta clave en un país con creciente desarrollo tecnológico, científico y empresarial, pues incentiva la innovación y protege los intereses económicos de individuos y compañías.",
    purpose: "Fomentar la innovación tecnológica, proteger las creaciones industriales y comerciales, y garantizar que los inventores y empresarios obtengan reconocimiento y beneficios económicos por sus aportaciones. También busca fortalecer la competitividad del país en el ámbito global al promover un ecosistema empresarial más justo y transparente. Al mismo tiempo, protege a los consumidores, asegurando que los productos y servicios que adquieren sean auténticos y cumplan con estándares de calidad. La ley tiene como fin último impulsar el crecimiento económico de México mediante la protección y valorización de los activos intangibles.",
    downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPPI.pdf",
    infoLink: "https://www.gob.mx/se/articulos/la-propiedad-industrial-en-mexico-196503"
  },
  {
    title: "Ley Federal del Derecho de Autor",
    description: "Es la ley que regula los derechos morales y patrimoniales de los autores, artistas y productores en México, asegurando la protección de sus obras y fomentando la creación cultural. Reconoce los derechos de escritores, músicos, pintores, fotógrafos, cineastas, intérpretes y otros creadores, otorgándoles la facultad de decidir sobre el uso, reproducción y distribución de sus obras. Además, establece mecanismos para prevenir la piratería y sancionar las violaciones a los derechos de autor. Su importancia radica en que garantiza el respeto a la creatividad, la innovación artística y la preservación de la diversidad cultural de la Nación.",
    purpose: "Proteger los derechos de los creadores y fomentar la producción cultural como parte del patrimonio de México. Busca salvaguardar la integridad de las obras, garantizar que los autores reciban el reconocimiento y la retribución económica que merecen, y estimular la industria cultural. Asimismo, promueve el acceso legal a los bienes culturales, equilibrando el derecho de los creadores con el derecho de la sociedad al conocimiento y la cultura. En última instancia, su propósito es fortalecer la identidad nacional y enriquecer el acervo cultural del país.",
    downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf",
    infoLink: "https://www.indautor.gob.mx/"
  },
  {
    title: "Código Penal Federal",
    description: "Es el ordenamiento jurídico que tipifica los delitos de competencia federal en México y define las sanciones correspondientes, abarcando delitos comunes y especializados, como los relacionados con la corrupción, delincuencia organizada, narcotráfico, delitos cibernéticos y contra la propiedad intelectual. El Código Penal Federal constituye una herramienta esencial para preservar el orden y la justicia, pues establece claramente qué conductas son consideradas delitos y cuáles son las consecuencias legales de cometerlos. Además, refleja la evolución de la sociedad mexicana al incorporar nuevas tipificaciones de delitos vinculados a la era digital y al crimen organizado.",
    purpose: "Mantener el orden jurídico y la paz social mediante la tipificación de delitos y la aplicación de sanciones proporcionales. Busca proteger la seguridad nacional, los derechos humanos, la integridad física y patrimonial de las personas, así como los intereses colectivos de la sociedad mexicana. También pretende disuadir conductas ilícitas a través de sanciones ejemplares y mecanismos de justicia penal. A largo plazo, su propósito es consolidar un Estado de derecho más justo y eficaz, donde la legalidad sea un pilar fundamental para la convivencia social.",
    downloadLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf",
    infoLink: "https://www.gob.mx/segob"
  }
];


  return (
    <div className="pl-9 space-y-8">
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