import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Globe, Building } from "lucide-react";

const PrivacyNotice = () => {
  return (
    <section id="aviso-privacidad" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Aviso de Privacidad</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En cumplimiento con la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader className="bg-gradient-primary text-primary-foreground">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6" />
              <CardTitle className="text-xl">Información del Responsable</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Razón Social</h3>
                    <p className="text-muted-foreground">Instituto Tecnológico Superior de Estudios</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Correo Electrónico</h3>
                    <p className="text-muted-foreground">contacto@normatecadigital.edu.mx</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Página Web</h3>
                    <p className="text-muted-foreground">www.normatecadigital.edu.mx</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-3">Datos que Recopilamos</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Datos de identificación (nombre, correo electrónico)</li>
                  <li>• Datos de navegación y uso del sitio web</li>
                  <li>• Registros de acceso a documentos normativos</li>
                  <li>• Información académica e institucional</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">Finalidades del Tratamiento</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Finalidades Primarias:</h4>
                  <ul className="space-y-1">
                    <li>• Proporcionar acceso a recursos normativos</li>
                    <li>• Gestionar consultas y soporte técnico</li>
                    <li>• Cumplir con obligaciones legales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Finalidades Secundarias:</h4>
                  <ul className="space-y-1">
                    <li>• Envío de actualizaciones normativas</li>
                    <li>• Análisis estadístico de uso</li>
                    <li>• Mejora de servicios digitales</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">Derechos ARCO</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales, 
                así como limitar su uso o divulgación. Para ejercer estos derechos, puede contactarnos a través de:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm"><strong>Email:</strong> demcarmen5@gmail.com / natzllyuni@gmail.com</p>
                <p className="text-sm"><strong>Teléfono:</strong> +52 418 150 8382 +52 415 566 8881</p>
                <p className="text-sm"><strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00 hrs</p>
              </div>
            </div>

            <div className="border-t pt-6 text-xs text-muted-foreground">
              <p>
                Última actualización: {new Date().toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyNotice;