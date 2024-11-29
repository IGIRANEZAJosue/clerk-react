import {
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <div className="flex items-center justify-center">
          <Sidebar />
          <UserButton />
          <SignOutButton />
        </div>
      </SignedIn>
    </header>
  );
}
