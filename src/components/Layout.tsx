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
          <footer className="w-full border-t border-border bg-card/70 text-xs text-muted-foreground py-3 text-center">
            © 2025 Instituto Tecnológico Superior de Estudios
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}