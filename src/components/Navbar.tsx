import { UserButton } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
export default function Navbar() {
	const location = useLocation();
	const title = location.pathname.split("/").pop() || "dashboard";

	return (
		<div className="flex items-center font-lato justify-between p-4 border-y border-gray-300 shadow-sm w-full">
			<h1 className="font-bold text-xl lg:text-3xl capitalize">{title}</h1>
			<UserButton />
		</div>
	);
}
