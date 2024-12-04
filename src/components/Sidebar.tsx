import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className=" bg-white border border-gray-200 font-lato text-gray-900 text-start h-screen w-1/5 p-4 ">
			<div className="flex items-center gap-4 p-4 bg-[#1A2B3E] rounded-xl">
				<img
					className="size-8"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
					alt="tailwind logo"
				/>
				<h1 className="font-bold text-2xl text-white">Sidebar.tsx</h1>
			</div>
			<div className="flex items-start justify-start my-8 w-full text-sm font-lato">
				<ul className="text-xl w-full">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={""}
					>
						<i className="fa-regular fa-objects-column"></i>
						Dashboard
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"team"}
					>
						<i className="fa-regular fa-user-group"></i>
						Team
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"projects"}
					>
						<i className="fa-regular fa-folder-closed"></i>
						Projects
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"calendar"}
					>
						<i className="fa-regular fa-calendar-lines"></i>
						Calendar
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"documents"}
					>
						<i className="fa-regular fa-folder-open"></i>
						Documents
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"settings"}
					>
						<i className="fa-regular fa-gear"></i>
						Settings
					</NavLink>
				</ul>
			</div>
		</aside>
	);
}
