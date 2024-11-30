import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-4">
        <Navbar />
      </div>
    </div>
  );
}
