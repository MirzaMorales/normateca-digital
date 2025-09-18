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
          <footer className="w-full border-t border-[#5EABD6] bg-[#5EABD6] text-white py-8 px-6 font-sans">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
    
    {/* Sección izquierda: Logo + Información */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
      {/* Logo */}
      <img
        src="/favicon.ico"
        alt="Normateca Logo"
        className="h-20 w-20 rounded-full shadow-lg object-contain opacity-90 ml-4"
      />

      {/* Información */}
      <div className="flex flex-col gap-1">
        <span className="font-extrabold text-lg tracking-wide mb-1">Normateca Digital</span>
        <span className="text-sm">
          Original de: <span className="font-semibold">Dolores Hidalgo C.I.N, Gto.</span>
        </span>
        <span className="text-sm">
          Propiedad de <span className="font-semibold">Mirza Morales y Catalina Delgado</span>
        </span>
        <span className="text-sm">
          Contacto: <span className="font-semibold">(+52) 415 566 8881 / (+52) 418 150 8382</span>
        </span>
        <span className="text-sm">
          Correo:{" "}
          <a
            href="mailto:natzllyuni@gmail.com"
            className="underline hover:text-blue-200 transition font-medium"
          >
            natzllyuni@gmail.com / demcarmen5@gmail.com
          </a>
        </span>
      </div>
    </div>

    {/* Sección derecha */}
    <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
      <span className="font-semibold text-sm">
        © 2025 Instituto Tecnológico Superior de Estudios
      </span>
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