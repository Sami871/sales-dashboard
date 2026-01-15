import { Menu, PanelLeftClose } from "lucide-react";
import { useUIStore } from "../store/uiStore";
import SearchBar from "./SearchBar";
import CountrySelect from "./CountrySelect";
import NotificationBell from "./NotificationBell";
import Profile from "./Profile";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  const {
    toggleSidebar,
    toggleCollapse,
    sidebarCollapsed,
  } = useUIStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-900 text-white flex items-center px-4 shadow">
      
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <Menu size={22} />
        </button>

        <button
          className="hidden md:block"
          onClick={toggleCollapse}
        >
          <PanelLeftClose
            className={`transition-transform ${
              sidebarCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>

        <NavLink to="/" className="cursor-pointer hover:text-blue-400 transition">
          Dashboard
        </NavLink>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <SearchBar />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden lg:block">
          <CountrySelect />
        </div>
        <NotificationBell />
        <Profile />
      </div>
    </header>
  );
};

export default Navbar;
