import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NormativeCardProps {
  title: string;
  description: string;
  purpose?: string;
  downloadLink?: string;
  infoLink?: string;
  isExternal?: boolean;
}

const NormativeCard = ({ title, description, purpose, downloadLink, infoLink, isExternal = true }: NormativeCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-primary/60 shadow-card relative overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
        {/* Propósito solo visible en hover, debajo de la descripción */}
        {purpose && (
          <div className="max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
            <p className="mt-3 text-sm font-medium text-secondary-foreground bg-secondary/60 rounded p-2">
              <span className="font-semibold">Propósito:</span> {purpose}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-2">
          {downloadLink && (
            <Button asChild variant="default" size="sm" className="w-full">
              <a href={downloadLink} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Descargar/Ver Normativa
              </a>
            </Button>
          )}
          {infoLink && (
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href={infoLink} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Más Información
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NormativeCard;