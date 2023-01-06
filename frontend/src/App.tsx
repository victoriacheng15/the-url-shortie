import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Login } from "./pages";
import { Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/Dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
