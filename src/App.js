import { createTheme, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

const darkTheme = createTheme({
	type: "dark",
});

function App() {
	return (
		<NextUIProvider theme={darkTheme}>
			<div className="App">
				<Navbar />
				<ItemListContainer greeting={"Fran"} />
			</div>
		</NextUIProvider>
	);
}

export default App;
