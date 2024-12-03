import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
	const { userId, isLoaded } = useAuth();
	const navigate = useNavigate();

	console.log("test", userId);

	useEffect(() => {
		if (isLoaded && !userId) navigate("/sign-in");
	}, [isLoaded, userId]);

	if (!isLoaded) return "Loading...";

	return (
		<div className="flex flex-row">
			<Sidebar />
			<div className="flex flex-col w-full">
				<Navbar />
				<div className="p-4 w-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
