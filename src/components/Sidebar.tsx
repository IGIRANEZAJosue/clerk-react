import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className=" bg-white border border-gray-200 font-lato text-gray-900 text-start h-screen w-1/5 p-4 ">
			<div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-[#1A2B3E] rounded-xl">
				<img
					className="size-8"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
					alt="tailwind logo"
				/>
				<h1 className="font-bold text-xl text-white hidden lg:flex">
					Sidebar.tsx
				</h1>
			</div>
			<div className="flex items-start justify-start my-8 w-full font-lato">
				<ul className="flex flex-col gap-2 text-lg w-full">
					<NavLink
						end
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"/dashboard"}
					>
						<i className="fa-regular fa-objects-column"></i>
						<p className="hidden lg:flex"> Dashboard</p>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"team"}
					>
						<i className="fa-regular fa-user-group"></i>
						<p className="hidden lg:flex"> Team</p>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"projects"}
					>
						<i className="fa-regular fa-folder-closed"></i>
						<p className="hidden lg:flex"> Projects</p>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"calendar"}
					>
						<i className="fa-regular fa-calendar-lines"></i>
						<p className="hidden lg:flex"> Calendar</p>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"documents"}
					>
						<i className="fa-regular fa-folder-open"></i>
						<p className="hidden lg:flex"> Documents</p>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						to={"settings"}
					>
						<i className="fa-regular fa-gear"></i>
						<p className="hidden lg:flex"> Settings</p>
					</NavLink>
				</ul>
			</div>
		</aside>
	);
}
