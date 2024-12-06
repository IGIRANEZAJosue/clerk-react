import { Navigate, Outlet, useNavigate } from "react-router-dom";
import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function DefaultLayout() {
	const navigate = useNavigate();

	return (
		<ClerkProvider
			routerPush={(to) => navigate(to)}
			routerReplace={(to) => navigate(to, { replace: true })}
			publishableKey={PUBLISHABLE_KEY}
		>
			<SignedIn>
				<Navigate to="/dashboard" />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn
					signInForceRedirectUrl="/login"
					signUpForceRedirectUrl="/signup"
				/>
			</SignedOut>
			<main className="min-h-screen h-screen">
				<Outlet />
			</main>
		</ClerkProvider>
	);
}
