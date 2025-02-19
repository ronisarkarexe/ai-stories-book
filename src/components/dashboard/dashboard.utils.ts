interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: "fas fa-home", path: "/dashboard" },
  {
    name: "Components",
    icon: "fas fa-puzzle-piece",
    path: "/dashboard/components",
  },
  { name: "Settings", icon: "fas fa-cog", path: "/dashboard/settings" },
];
