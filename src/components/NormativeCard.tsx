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
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0 shadow-card">
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
      </CardHeader>
      <CardContent className="pt-0">
        {purpose && (
          <div className="mb-4 p-3 bg-secondary rounded-lg">
            <p className="text-sm font-medium text-secondary-foreground">
              <span className="font-semibold">Propósito:</span> {purpose}
            </p>
          </div>
        )}
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