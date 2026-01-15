import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useUIStore } from "../store/uiStore";
import { menuItems } from "../menu/menuConfig";
import { Airplay } from "lucide-react";

const Sidebar = () => {
  const {
    sidebarOpen,
    sidebarCollapsed,
    closeSidebar,
  } = useUIStore();

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-gray-900 text-white
          transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "w-16" : "w-64"}
          transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center gap-2 p-6">
          <div className="w-8 h-8 bg-blue-400 flex items-center justify-center rounded">
            <Airplay size={18} />
          </div>
          {!sidebarCollapsed && (
            <p className="font-bold text-lg">Test Board</p>
          )}
        </div>

        <nav className="px-3 space-y-1">
          {menuItems
            .filter((item) => item.roles.includes(user?.role))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded text-sm
                  ${
                    isActive
                      ? "bg-blue-500"
                      : "hover:bg-blue-400"
                  }`
                }
              >
                <item.icon size={18} />
                {!sidebarCollapsed && item.name}
              </NavLink>
            ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
