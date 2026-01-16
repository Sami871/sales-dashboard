import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useUIStore } from "../store/uiStore";

const MainLayout = () => {
  const { sidebarCollapsed } = useUIStore();

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar />
      <Navbar />

      {/* Content */}
      <div
        className={`
          pt-16 transition-all
          ${sidebarCollapsed ? "md:ml-16" : "md:ml-64"}
        `}
      >
        <main className="h-[calc(100vh-4rem)] overflow-y-auto bg-gray-100 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
