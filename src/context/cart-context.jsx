import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
	productos: [],
	onAgregarProducto: producto => {},
});

export const CartContextProvider = ({ children }) => {
	const [productos, setProductos] = useState([1, 2]);

	useEffect(() => {}, []);

	const agregarProductoHandler = productoNuevo => {
		// const nuevosProductos = productos.map(producto => {
		// 	if (producto.id === productoNuevo.id) {
		// 		return {
		// 			...producto,
		// 			cant: producto.cant + productoNuevo.cant,
		// 		};
		// 	}

		// 	return producto;
		// });

		// setProductos(nuevosProductos);
		console.log("Desde context, producto nuevo: ", productoNuevo);
		setProductos(prevProds => [...prevProds, productoNuevo]);
		console.log("Productos del carrito: ", productos);
	};

	return (
		<CartContext.Provider
			value={{
				productos,
				onAgregarProducto: agregarProductoHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
