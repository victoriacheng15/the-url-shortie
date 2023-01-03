import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar() {
	const links = [
		{
			label: "home",
			href: "/",
		},
		{
			label: "register",
			href: "/register",
		},
		{
			label: "login",
			href: "/login",
		},
	];

	return (
		<nav className="bg-gray-300 py-4">
			<Container>
				<ul className="flex gap-4 justify-end">
					{links.map(({ label, href }) => (
						<li key={label}>
							<Link className="capitalize text-lg font-medium" to={href}>{label}</Link>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
}

export default Navbar;
