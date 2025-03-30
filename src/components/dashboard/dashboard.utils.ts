import { USER_ROLE } from "../../constants/role";

export interface MenuItem {
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
    roles: [
      USER_ROLE.USER,
      USER_ROLE.ADMIN,
      USER_ROLE.SUPER_ADMIN,
      USER_ROLE.WRITER,
    ],
  },
  {
    name: "Components",
    icon: "fas fa-puzzle-piece",
    path: "/dashboard/components",
    roles: [
      USER_ROLE.USER,
      USER_ROLE.ADMIN,
      USER_ROLE.SUPER_ADMIN,
      USER_ROLE.WRITER,
    ],
  },
  {
    name: "Settings",
    icon: "fas fa-cog",
    path: "/dashboard/settings",
    roles: [
      USER_ROLE.USER,
      USER_ROLE.ADMIN,
      USER_ROLE.SUPER_ADMIN,
      USER_ROLE.WRITER,
    ],
  },
  {
    name: "Users",
    icon: "fas fa-users",
    path: "/dashboard/users",
    roles: [
      USER_ROLE.USER,
      USER_ROLE.ADMIN,
      USER_ROLE.SUPER_ADMIN,
      USER_ROLE.WRITER,
    ],
    subRoutes: [
      {
        name: "User List",
        icon: "fas fa-users",
        path: "/dashboard/users/list",
        roles: [
          USER_ROLE.USER,
          USER_ROLE.ADMIN,
          USER_ROLE.SUPER_ADMIN,
          USER_ROLE.WRITER,
        ],
      },
    ],
  },
  {
    name: "Writers",
    icon: "fas fa-pen",
    path: "/dashboard/writers",
    roles: [USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.WRITER, USER_ROLE.USER],
  },
];
