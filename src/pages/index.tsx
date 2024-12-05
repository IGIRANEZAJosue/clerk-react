import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<nav className="bg-white shadow-lg mb-8">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between items-center h-16">
						<div className="flex-shrink-0">
							<span className="text-xl font-bold">Logo</span>
						</div>
						<div className="hidden md:block">
							<ul className="flex justify-center gap-8 list-none p-0">
								<li>
									<Link
										to="/signup"
										className="text-gray-600 text-lg px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
									>
										Sign Up
									</Link>
								</li>
								<li>
									<Link
										to="/login"
										className="text-gray-600 text-lg px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
									>
										Sign In
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="text-gray-600 text-lg px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
									>
										Contact
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard"
										className="text-gray-600 text-lg px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
									>
										Dashboard
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<section className="py-16">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
					<p className="text-xl text-gray-600 mb-8">
						Experience the next generation of secure authentication and user
						management.
					</p>
					<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
						Get Started
					</button>
				</div>
			</section>
		</>
	);
}
