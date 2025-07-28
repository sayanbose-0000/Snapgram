import { Bell, CirclePlus, Home, Search, User } from "lucide-react";

interface DockItem {
  title: string,
  linkTo: string,
  icon: React.FC;
  divider?: boolean;
};

const dockList: DockItem[] = [
  { title: "My Feed", linkTo: "/", icon: Home },
  { title: "Search", linkTo: "/search", icon: Search },
  { title: "Create", linkTo: "/create", icon: CirclePlus },
  { title: "Notifications", linkTo: "/notifications", icon: Bell },
  // { title: "Bookmarks", linkTo: "/bookmarks", icon: Star, divider: true },
  { title: "Profile", linkTo: "/profile", icon: User },
  // { title: "Settings", linkTo: "/settings", icon: Settings }
];

export { dockList };