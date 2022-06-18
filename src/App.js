import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<NextUIProvider>
			<div className="App">
				<Navbar />
				<ItemListContainer greeting={"Fran"} />
			</div>
		</NextUIProvider>
	);
}

export default App;
