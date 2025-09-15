import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Globe, Building, FileCheck, Clock } from "lucide-react";

const AvisoPrivacidad = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-secondary rounded-xl p-8 border border-border/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Aviso de Privacidad</h1>
            <p className="text-muted-foreground">
              En cumplimiento con la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados
            </p>
          </div>
        </div>
      </div>

      {/* Main Privacy Notice */}
      <Card className="shadow-card border-border/50">
        <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-xl">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6" />
            <CardTitle className="text-xl">Información del Responsable</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Razón Social</h3>
                  <p className="text-muted-foreground">Instituto Tecnológico Superior de Estudios</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Institución educativa dedicada a la formación en tecnologías de la información
                    Delgado Manzano Carmen Catalina / Morales Lezama Mirza Natzielly
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                  <p className="text-muted-foreground">demcarmen5@gmail.com / natzllyuni@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Canal principal de comunicación para consultas
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Página Web</h3>
                  <p className="text-muted-foreground">www.normatecadigital.edu.mx</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Portal oficial de la institución
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                Datos que Recopilamos
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong>Datos de navegación:</strong> Dirección IP, navegador, tiempo de sesión</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong>Registros de acceso:</strong> Documentos consultados, fecha y hora de acceso</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="font-semibold text-xl mb-6">Finalidades del Tratamiento</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-accent-foreground">Finalidades Primarias</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-accent-foreground rounded-full mt-2 shrink-0"></div>
                    <span>Proporcionar acceso a recursos normativos digitales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-accent-foreground rounded-full mt-2 shrink-0"></div>
                    <span>Gestionar consultas y brindar soporte técnico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-accent-foreground rounded-full mt-2 shrink-0"></div>
                    <span>Cumplir con obligaciones legales y regulatorias</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/60 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-secondary-foreground">Finalidades Secundarias</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-secondary-foreground rounded-full mt-2 shrink-0"></div>
                    <span>Análisis estadístico de uso del portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-secondary-foreground rounded-full mt-2 shrink-0"></div>
                    <span>Mejora continua de servicios digitales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="font-semibold text-xl mb-6">Derechos ARCO</h3>
            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Usted tiene derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>, <strong>Cancelar</strong> u <strong>Oponerse</strong> al tratamiento de sus datos personales, 
                así como limitar su uso o divulgación. Para ejercer estos derechos, puede contactarnos a través de los siguientes medios:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border/50 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Contacto para Derechos ARCO</h4>
                <div className="space-y-3 text-sm">
                  <p><strong>Email:</strong> demcarmen5@gmail.com / natzllyuni@gmail.com</p>
                  <p><strong>Teléfono:</strong> +52 418 150 8382 +52 415 566 8881 </p>
                  <p><strong>Horario de Atención:</strong> Lunes a Viernes de 9:00 a 18:00 hrs</p>
                  <p><strong>Tiempo de respuesta:</strong> Máximo 20 días hábiles</p>
                </div>
              </div>
              {/* <div className="bg-card border border-border/50 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Documentos Requeridos</h4>
                <div className="space-y-2 text-sm">
                  <p>• Solicitud por escrito especificando el derecho a ejercer</p>
                  <p>• Identificación oficial vigente</p>
                  <p>• Comprobante de domicilio reciente</p>
                  <p>• Documentos que acrediten la personalidad (si es representante)</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Información de Actualización</h3>
            </div>
            <div className="bg-muted/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Este aviso de privacidad puede ser modificado para cumplir con actualizaciones en la legislación vigente. 
                Las modificaciones serán notificadas a través de nuestro sitio web.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvisoPrivacidad;