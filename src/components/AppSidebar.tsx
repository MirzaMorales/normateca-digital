import { 
  Home, 
  Shield, 
  Scale, 
  BookOpen
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
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Normativas Mexicanas", url: "/normativas-mexicanas", icon: Scale },
  { title: "Estándares Internacionales", url: "/estandares", icon: BookOpen },
  { title: "Aviso de Privacidad", url: "/privacidad", icon: Shield },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

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

      <SidebarContent className="px-2 py-6"> {/* más padding para separar */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70 mb-3">
            {!collapsed && "Navegación Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3"> {/* más espacio entre items */}
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && (
                        <span className="truncate" style={{ color: "#79D1C3" }}>
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
