import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <h1 className="font-semibold text-foreground">Portal de Normativas</h1>
                  <p className="text-xs text-muted-foreground">Sistema de Gestión Documental</p>
                </div>
              </div>
             
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-6">
              {children}
            </div>
          </main>
          
          {/* Footer global */}
          <footer className="w-full border-t border-blue-700 bg-blue-700 text-white py-6 px-4 text-center flex flex-col items-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna izquierda */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="font-bold text-xl mb-1">Normateca Digital</span>
                <span>Original de: <span className="font-semibold">Dolores Hidalgo C.I.N</span></span>
                <span>Propiedad de Mirza Morales y Catalina Delgado</span>
                <span>Contacto: <span className="font-semibold">4155668881</span></span>
                <span>
                  Correo:{" "}
                  <a
                    href="mailto:natzllyuni@gmail.com"
                    className="underline hover:text-blue-200 transition"
                  >
                    natzllyuni@gmail.com
                  </a>
                </span>
              </div>
              {/* Columna derecha */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <span className="font-semibold">© 2025 Instituto Tecnológico Superior de Estudios</span>
                <a
                  href="/privacidad"
                  className="underline text-white hover:text-blue-200 transition"
                >
                  Aviso de privacidad
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}