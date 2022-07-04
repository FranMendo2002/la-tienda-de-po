import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Products/Products";

const darkTheme = createTheme({
	type: "dark",
});

function App() {
	return (
		<NextUIProvider theme={darkTheme}>
			<div className="App">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Navigate to={"/home"}></Navigate>}
					></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</div>
		</NextUIProvider>
	);
}

export default App;
