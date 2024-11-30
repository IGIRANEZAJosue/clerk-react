import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export default function App() {
  return (
    <header>
      <SignedOut>
        <Home />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </header>
  );
}
