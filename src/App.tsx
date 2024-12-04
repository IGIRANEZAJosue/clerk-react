import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/dashboard";
import ContactPage from "./pages/contact";
import Login from "./pages/login";
import SignUpPage from "./pages/signup";
import Settings from "./pages/dashboard/settings";
import Calendar from "./pages/dashboard/calendar";
import Projects from "./pages/dashboard/projects";
import Team from "./pages/dashboard/team";
import Documents from "./pages/dashboard/documents";

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
					{ path: "team", element: <Team /> },
					{ path: "projects", element: <Projects /> },
					{ path: "calendar", element: <Calendar /> },
					{ path: "documents", element: <Documents /> },
					{ path: "settings", element: <Settings /> },
				],
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={routes} />;
}
