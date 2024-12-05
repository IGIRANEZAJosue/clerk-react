import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn path="/login" />
    </div>
  );
}
