import { UserButton } from "@clerk/clerk-react";
export default function Navbar() {
	return (
		<div className="flex items-center font-lato justify-between p-4 border-y-2 border-gray-300 w-full">
			<h1 className="font-bold text-3xl">Dashboard</h1>
			<UserButton />
		</div>
	);
}
