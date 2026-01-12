import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";

const Profile = () => {
  const [open, setOpen] = useState(false);

  // Mock user (replace with auth state later)
  const user = {
    name: "Engr. Sami",
    role: "Admin",
    avatar:
      "https://i.pravatar.cc/150?img=3", // placeholder avatar
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="relative">
      {/* Profile button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-2 py-1 rounded-lg"
      >
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Name & role */}
        <div className="hidden sm:flex flex-col items-start leading-tight">
          <span className="text-sm font-semibold">{user.name}</span>
          <span className="text-xs text-gray-500">{user.role}</span>
        </div>

        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg border z-50">
          {/* User info */}
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>

          {/* Menu */}
          <ul className="py-1">
            <li>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm rounded hover:bg-blue-300">
                <User size={16} />
                Profile
              </button>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm rounded text-red-600 hover:bg-blue-300"
              >
                <LogOut size={16} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
