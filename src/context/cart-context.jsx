import { doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
	productos: [],
	onAgregarProducto: producto => {},
	onEliminarProducto: productoId => {},
	onVaciarCarrito: () => {},
	onExisteProducto: id => {},
	onCantidadProductos: () => {},
	onPrecioTotal: () => {},
	onRestarStock: () => {},
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

	const restarStockHandler = () => {
		// Esta funcion solo se ejecutará una vez que se finalice la compra
		const db = getFirestore();

		productos.forEach(producto => {
			const productoDB = doc(db, "productos", producto.idProducto);
			const nuevaCant = producto.stock - producto.cant;
			updateDoc(productoDB, { stock: nuevaCant });
		});
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
				onRestarStock: restarStockHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
