export default function Sidebar() {
  return (
    <aside className="bg-gray-800 font-inconsolata text-white h-screen p-4 ">
      <div className="flex items-start justify-start">
        <h1 className="text-5xl">Sidebar.tsx</h1>
      </div>
      <div className="flex items-start justify-center">
        <ul className="text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </aside>
  );
}
