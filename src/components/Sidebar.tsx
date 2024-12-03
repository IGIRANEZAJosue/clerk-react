import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className=" bg-white border border-gray-200 font-dm-sans text-gray-900 text-start h-screen w-1/5 p-4 ">
			<div className="flex items-center gap-4 p-4 bg-[#1A2B3E] rounded-xl">
				<img
					className="size-8"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
					alt="tailwind logo"
				/>
				<h1 className="font-bold text-2xl text-white">Sidebar.tsx</h1>
			</div>
			<div className="flex items-start justify-start my-8 w-full font-inter text-sm">
				<ul className="text-xl w-full">
					<NavLink className="nav-link" to={""}>
						Dashboard
					</NavLink>
					<NavLink className="nav-link" to={"/"}>
						Team
					</NavLink>
					<NavLink className="nav-link" to={"/"}>
						Projects
					</NavLink>
					<NavLink className="nav-link" to={"/"}>
						Calendar
					</NavLink>
					<NavLink className="nav-link" to={"/"}>
						Documents
					</NavLink>
					<NavLink className="nav-link" to={"settings"}>
						Settings
					</NavLink>
				</ul>
			</div>
		</aside>
	);
}
