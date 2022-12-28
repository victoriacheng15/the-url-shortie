import { Routes, Route } from "react-router-dom";
import { Home, Register, Login } from "./pages";
import { Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
