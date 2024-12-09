import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../data/sidebar";

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
					{sidebarLinks.map((link) => (
						<NavLink
							end
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
							to={link.path}
						>
							<i className={`fa-regular ${link.icon}`}></i>
							<p className="hidden lg:flex capitalize">{link.title}</p>
						</NavLink>
					))}
				</ul>
			</div>
		</aside>
	);
}
