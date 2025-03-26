interface MenuItem {
  name: string;
  icon: string;
  path: string;
  roles: string[];
  subRoutes?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: "fas fa-home",
    path: "/dashboard",
    roles: ["admin", "user", "writer"],
  },
  {
    name: "Components",
    icon: "fas fa-puzzle-piece",
    path: "/dashboard/components",
    roles: ["admin", "user", "writer"],
  },
  {
    name: "Settings",
    icon: "fas fa-cog",
    path: "/dashboard/settings",
    roles: ["admin", "user", "writer"],
  },
  {
    name: "Users",
    icon: "fas fa-users",
    path: "/dashboard/users",
    roles: ["admin", "user", "writer"],
    subRoutes: [
      {
        name: "User List",
        icon: "fas fa-users",
        path: "/dashboard/users/list",
        roles: ["admin", "user"],
      },
      {
        name: "User Profile",
        icon: "fas fa-users",
        path: "/dashboard/users/profile/:id",
        roles: ["admin", "user", "writer"],
      },
    ],
  },
  {
    name: "Writers",
    icon: "fas fa-pen",
    path: "/dashboard/writers",
    roles: ["admin", "editor", "user"],
  },
];
