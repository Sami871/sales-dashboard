import { useUIStore } from "../store/uiStore";
import CountrySelect from "./CountrySelect";
import NotificationBell from "./NotificationBell";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { toggleSidebar } = useUIStore();

  return (
    <header className="h-16 bg-gray-900 text-white shadow flex items-center justify-between px-4">
      {/* <button onClick={toggleSidebar} className="font-bold">
        ☰
      </button> */}
      <h1 className="font-bold text-xl">Dashboard</h1>
      <SearchBar />
      <CountrySelect />
     <NotificationBell />
      <Profile />
    </header>
  );
};

export default Navbar;
