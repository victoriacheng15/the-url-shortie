import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav>
			<ul className="flex gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
