import { UserButton } from "@clerk/clerk-react";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-inconsolata font-bold text-3xl">Dashboard</h1>
      <UserButton />
    </div>
  );
}
