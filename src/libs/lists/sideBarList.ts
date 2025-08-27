import { Bell, CirclePlus, Home, Search, Settings, Star, User } from "lucide-react";

interface SideBarItem {
  title: string,
  linkTo: string,
  icon: React.FC;
  divider?: boolean;
};

const sideBarList: SideBarItem[] = [
  { title: "My Feed", linkTo: "/", icon: Home },
  { title: "Search", linkTo: "/search", icon: Search },
  { title: "Notifications", linkTo: "/notifications", icon: Bell },
  { title: "Bookmarks", linkTo: "/bookmarks", icon: Star, divider: true },
  { title: "Create", linkTo: "/create", icon: CirclePlus },
  { title: "Profile", linkTo: "/profile", icon: User },
  { title: "Settings", linkTo: "/settings", icon: Settings }
];

export { sideBarList };
