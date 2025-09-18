import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AspectosEticosLegales() {
  const [openPDF, setOpenPDF] = useState<string | null>(null);

  const temas = [
    {
      titulo: "Aspectos Éticos del Manejo de la Información",
      descripcion: "Promueve prácticas responsables en el tratamiento de datos personales y sensibles, respetando la privacidad y los derechos de los individuos.",
      imagen: "/images/ethics.jpg",
      pdf: "/docs/etica.pdf"
    },
    {
      titulo: "Aspectos Legales del Manejo de la Información",
      descripcion: "Cumple con la normativa vigente en la gestión de datos garantizando el cumplimiento de leyes y regulaciones para evitar sanciones.",
      imagen: "/images/legal.jpg",
      pdf: "/docs/legal.pdf"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Aspectos Éticos y Legales</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {temas.map((item, i) => (
          <Card key={i} className="shadow-card hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <img src={item.imagen} alt="" className="rounded-lg w-full h-45 object-cover mb-3" />
              <CardTitle>{item.titulo}</CardTitle>
              <CardDescription>{item.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => setOpenPDF(item.pdf)}
                className="w-full justify-center rounded-lg"
              >
                Leer más
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {openPDF && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 h-5/6 rounded-xl overflow-hidden shadow-xl relative">
           <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
        <h3 className="font-semibold text-gray-800">Visor de documento</h3>
            <button
              onClick={() => setOpenPDF(null)}
              className="absolute top-1 right-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Cerrar
            </button>
        </div>
            <iframe src={openPDF} className="w-full h-full "></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
