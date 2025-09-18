import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu, Bell, User, Shield, Scale } from "lucide-react";
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
          <footer className="w-full border-t border-[#5EABD6] bg-[#5EABD6] text-white py-8 px-6 text-center flex flex-col items-center font-sans">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Icono grande */}
              <div className="flex justify-center items-center">
                <img
                  src="/favicon.ico"
                  alt="Normateca Logo"
                  className="h-24 w-24 rounded-full shadow-lg object-contain opacity-90"
                />
              </div>
              {/* Columna izquierda */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="font-extrabold text-lg mb-1 tracking-wide">Normateca Digital</span>
                <span className="text-sm">Original de: <span className="font-semibold">Dolores Hidalgo C.I.N</span></span>
                <span className="text-sm">Propiedad de <span className="font-semibold">Mirza Morales y Catalina Delgado</span></span>
                <span className="text-sm">Contacto: <span className="font-semibold">(+52) 415 566 8881</span></span>
                <span className="text-sm">
                  Correo:{" "}
                  <a
                    href="mailto:natzllyuni@gmail.com"
                    className="underline hover:text-blue-200 transition font-medium"
                  >
                    natzllyuni@gmail.com
                  </a>
                </span>
              </div>
              {/* Columna derecha */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <span className="font-semibold text-sm">© 2025 Instituto Tecnológico Superior de Estudios</span>
                <a
                  href="/privacidad"
                  className="flex items-center gap-1 underline text-white hover:text-blue-200 transition text-sm font-medium"
                >
                  <Shield className="h-4 w-4" />
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