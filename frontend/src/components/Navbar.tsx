import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar() {
	const links = [
		{
			label: "shortie",
			href: "/",
		},
		{
			label: "dashboard",
			href: "/dashboard",
		},
		{
			label: "login",
			href: "/login",
		},
	];

	return (
		<nav className="bg-gray-900 text-slate-100 py-4">
			<Container>
				<ul className="flex gap-4 justify-end">
					{links.map(({ label, href }) =>
						label === "shortie" ? (
							<li key={label} className="mr-auto">
								<Link className="capitalize text-lg font-medium" to={href}>
									{label}
								</Link>
							</li>
						) : (
							<li key={label}>
								<Link className="capitalize text-lg font-medium" to={href}>
									{label}
								</Link>
							</li>
						),
					)}
				</ul>
			</Container>
		</nav>
	);
}

export default Navbar;
