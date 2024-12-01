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
      <div className="flex items-start justify-start my-8">
        <ul className="text-xl">
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Dashboard
          </NavLink>
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Team
          </NavLink>
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Projects
          </NavLink>
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Calendar
          </NavLink>
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Documents
          </NavLink>
          <NavLink
            className="flex gap-4 p-4 font-medium rounded-lg hover:pl-6 hover:text-indigo-400 hover:bg-gray-200"
            to={"/"}
          >
            Reports
          </NavLink>
        </ul>
      </div>
    </aside>
  );
}
