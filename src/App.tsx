import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/Dashboard";

const routes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
