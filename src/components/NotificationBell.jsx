import { useState } from "react";
import { Bell } from "lucide-react";

const notifications = [
  { id: 1, text: "New user registered" },
  { id: 2, text: "Server restarted" },
  { id: 3, text: "New message received" },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full"
      >
        <Bell size={20} color="orange" />

        {/* Badge */}
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border rounded-lg shadow-lg z-50">
          <div className="px-4 py-2 font-semibold border-b">
            Notifications
          </div>

          {notifications.length === 0 ? (
            <div className="p-4 text-sm text-gray-500">
              No notifications
            </div>
          ) : (
            <ul>
              {notifications.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 text-sm hover:bg-blue-300 rounded cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
