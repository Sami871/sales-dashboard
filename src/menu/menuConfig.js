import {
  LayoutDashboard,
  Settings,
  ChartNoAxesColumn,
  ShoppingCart,
  Handbag,
  ChartNoAxesCombined,
  MessageSquareMore,
} from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    roles: ["admin", "user"],
  },
  {
    name: "Leaderboard",
    path: "/leader-board",
    icon: ChartNoAxesColumn,
    roles: ["admin"],
  },
  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingCart,
    roles: ["admin"],
  },
  {
    name: "Products",
    path: "/products",
    icon: Handbag,
    roles: ["admin"],
  },
  {
    name: "Sales Report",
    path: "/report",
    icon: ChartNoAxesCombined,
    roles: ["admin"],
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessageSquareMore,
    roles: ["admin"],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    roles: ["admin", "user"],
  },
];
