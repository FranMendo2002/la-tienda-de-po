import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
	productos: [],
	onAgregarProducto: producto => {},
	onEliminarProducto: productoId => {},
	onVaciarCarrito: () => {},
	onExisteProducto: id => {},
	onCantidadProductos: () => {},
	onPrecioTotal: () => {},
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

	const calcularCantTotalHandler = () => {
		let total = 0;
		productos.forEach(producto => (total += producto.cant));
		return total;
	};

	const precioTotalHandler = () => {
		let total = 0;
		productos.forEach(
			producto => (total += producto.cant * producto.precio)
		);
		return total;
	};

	return (
		<CartContext.Provider
			value={{
				productos,
				onAgregarProducto: agregarProductoHandler,
				onEliminarProducto: eliminarProductoHandler,
				onVaciarCarrito: vaciarHandler,
				onExisteProducto: existeProductoHandler,
				onCantidadProductos: calcularCantTotalHandler,
				onPrecioTotal: precioTotalHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
