import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/dashboard";
import ContactPage from "./pages/contact";
import Login from "./pages/login";
import SignUpPage from "./pages/signup";
import Settings from "./pages/dashboard/settings";

const routes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { index: true, element: <Dashboard /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
