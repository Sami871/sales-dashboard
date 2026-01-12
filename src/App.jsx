import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Leaderboard from "./pages/Leaderboard";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Report from "./pages/Report";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/leader-board",
        element: <Leaderboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
