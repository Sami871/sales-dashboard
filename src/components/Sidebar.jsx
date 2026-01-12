import { NavLink } from "react-router-dom";
import { menuItems } from "../menu/menuConfig";
import { useUIStore } from "../store/uiStore";
import {Airplay} from "lucide-react"

const Sidebar = () => {
  const { sidebarOpen } = useUIStore();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <aside
      className={`fixed h-screen bg-gray-900 text-white transition-all ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >

      <div className="flex items-center gap-2 p-6 rounded">
        <div className="w-8 h-8 bg-blue-400 flex justify-center items-center rounded">
        <Airplay size={20}/>
        </div>
        <p className="font-bold text-xl">Test Board</p>
        </div>
      
      <nav className="p-4 space-y-2">

        {menuItems
          .filter((item) => item.roles.includes(user?.role))
          .map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${
                  isActive ? "bg-blue-400" : "hover:bg-blue-300"
                }`
              }
            >
              <item.icon size={20} />
              {sidebarOpen && item.name}
            </NavLink>
          ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
