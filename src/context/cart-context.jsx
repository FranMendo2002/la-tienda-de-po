import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
	productos: [],
	onAgregarProducto: producto => {},
});

export const CartContextProvider = ({ children }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {}, []);

	const agregarProductoHandler = productoNuevo => {
		const nuevosProductos = productos.map(producto => {
			if (producto.id === productoNuevo.id) {
				return {
					...producto,
					cant: producto.cant + productoNuevo.cant,
				};
			}

			return productoNuevo;
		});

		setProductos(nuevosProductos);
		console.log(productos);
	};

	const eliminarProductoHandler = productoId => {
		setProductos(prevProductos => {
			prevProductos.filter(producto => producto.id !== productoId);
		});
	};

	const vaciarHandler = () => {
		setProductos([]);
	};

	const existeProductoHandler = id => {
		return productos.find(producto => producto.id === id) ? true : false;
	};

	return (
		<CartContext.Provider
			value={{
				productos,
				onAgregarProducto: agregarProductoHandler,
				onEliminarProducto: eliminarProductoHandler,
				onVaciarCarrito: vaciarHandler,
				onExisteProducto: existeProductoHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
