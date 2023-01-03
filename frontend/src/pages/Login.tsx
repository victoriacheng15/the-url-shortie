import { Route } from "react-router-dom";
import Container from "../components/Container";

function Login() {
	const google = () => {
		window.open("http://localhost:5000/auth/google", "_self");
	};
	
	return (
		<>
			<Container>
				<div className="flex flex-col gap-4 justify-center items-center">
					<h2 className="text-2xl md:text-4xl text-center">
						Welcome to Url shortie!
					</h2>
					<button
						type="button"
						className="text-lg font-medium bg-blue-300 p-2 rounded-lg"
						onClick={google}
					>
						Login with Google
					</button>
				</div>
			</Container>
		</>
	);
}

export default Login;
