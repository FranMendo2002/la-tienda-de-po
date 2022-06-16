import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
	return (
		<NextUIProvider>
			<div className="App">
				<Navbar />
			</div>
		</NextUIProvider>
	);
}

export default App;
