import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
	productos: [],
	onAgregarProducto: producto => {},
});

export const CartContextProvider = ({ children }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {}, []);

	const agregarProductoHandler = productoNuevo => {
		if (existeProductoHandler(productoNuevo.id)) {
			const auxProductos = productos.map(producto => {
				if (producto.id === productoNuevo.id) {
					producto.cant += productoNuevo.cant;
				}
				return producto;
			});
			setProductos(auxProductos);
		} else {
			setProductos([...productos, productoNuevo]);
		}
	};

	const eliminarProductoHandler = productoId => {
		setProductos(productos.filter(producto => producto.id !== productoId));
	};

	const vaciarHandler = () => {
		setProductos([]);
	};

	const existeProductoHandler = id => {
		return productos.some(producto => producto.id === id);
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
