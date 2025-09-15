import { useState } from "react";
import { 
  Home, 
  Shield, 
  BookOpen, 
  FileText, 
  Scale, 
  Settings,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const mainItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Normativas Mexicanas", url: "/normativas-mexicanas", icon: Scale },
  { title: "Estándares Internacionales", url: "/estandares", icon: BookOpen },
  { title: "Aviso de Privacidad", url: "/privacidad", icon: Shield },
];

const mexicanLaws = [
  { title: "LGPD", url: "/normativas/lgpd", icon: FileText },
  { title: "Ley de Propiedad Industrial", url: "/normativas/propiedad-industrial", icon: FileText },
  { title: "Ley de Derechos de Autor", url: "/normativas/derechos-autor", icon: FileText },
  { title: "Código Penal Federal", url: "/normativas/codigo-penal", icon: FileText },
];

const standards = [
  { title: "ISO 27001", url: "/estandares/iso-27001", icon: FileText },
  { title: "ISO 17799", url: "/estandares/iso-17799", icon: FileText },
  { title: "COBIT", url: "/estandares/cobit", icon: FileText },
  { title: "NIST", url: "/estandares/nist", icon: FileText },
  { title: "ITIL", url: "/estandares/itil", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const [normativasOpen, setNormativasOpen] = useState(
    mexicanLaws.some(item => currentPath === item.url)
  );
  const [estandaresOpen, setEstandaresOpen] = useState(
    standards.some(item => currentPath === item.url)
  );

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground shadow-sm" 
      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-smooth";

  return (
    <Sidebar 
      className={`${collapsed ? "w-16" : "w-72"} bg-gradient-sidebar border-r shadow-sidebar transition-smooth`}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Normateca Digital</h2>
              <p className="text-xs text-sidebar-foreground/70">Portal de Normativas</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70 mb-2">
            {!collapsed && "Navegación Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="truncate" style={{ color: "#79D1C3" }}>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <>
            {/* <SidebarGroup>
              <Collapsible open={normativasOpen} onOpenChange={setNormativasOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between hover:bg-sidebar-accent rounded-lg">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4" />
                      <span>Normativas MX</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${normativasOpen ? 'rotate-180' : ''}`} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1">
                  <SidebarMenu className="ml-4 space-y-1">
                    {mexicanLaws.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild size="sm" className="rounded-md">
                          <NavLink to={item.url} className={getNavCls}>
                            <item.icon className="h-3 w-3" />
                            <span className="text-xs truncate" style={{ color: "#79D1C3" }}>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup> */}

            {/* <SidebarGroup>
              <Collapsible open={estandaresOpen} onOpenChange={setEstandaresOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between hover:bg-sidebar-accent rounded-lg">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Estándares</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${estandaresOpen ? 'rotate-180' : ''}`} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1">
                  <SidebarMenu className="ml-4 space-y-1">
                    {standards.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild size="sm" className="rounded-md">
                          <NavLink to={item.url} className={getNavCls}>
                            <item.icon className="h-3 w-3" />
                            <span className="text-xs truncate" style={{ color: "#79D1C3" }}>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup> */}
          </>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        {!collapsed ? (
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs text-sidebar-foreground/70">Sistema Activo</span>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}