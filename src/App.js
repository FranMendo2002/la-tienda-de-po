import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

import NotFound from "./pages/NotFound/NotFound";

import CompraFinalizada from "./components/CompraFinalizada/CompraFinalizada";
import { CartContextProvider } from "./context/cart-context";
import { UserContextProvider } from "./context/user-context";

const darkTheme = createTheme({
	type: "dark",
});

function App() {
	return (
		<UserContextProvider>
			<CartContextProvider>
				<NextUIProvider theme={darkTheme}>
					<div className="App">
						<Navbar />
						<Routes>
							<Route
								path="/"
								element={
									<ItemListContainer greeting={"Fran"} />
								}
							></Route>
							<Route
								path="/category/:categoryId"
								element={
									<ItemListContainer greeting={"Fran"} />
								}
							></Route>
							<Route
								path="/item/:id"
								element={<ItemDetailContainer />}
							/>
							<Route path="/cart" element={<Cart />} />
							<Route
								path="/compra/:idCompra"
								element={<CompraFinalizada />}
							></Route>
							<Route path="*" element={<NotFound />}></Route>
						</Routes>
					</div>
				</NextUIProvider>
			</CartContextProvider>
		</UserContextProvider>
	);
}

export default App;
