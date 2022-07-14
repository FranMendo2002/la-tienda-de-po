import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { Container } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import Item from "../Item/Item";
import "./Cart.scss";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const [showDialog, setShowDialog] = useState(false);

	const handleAceptar = () => {
		setShowDialog(false);
		cartContext.onVaciarCarrito();
	};

	useEffect(() => {}, []);

	return (
		<>
			<h2>Tus productos</h2>
			<Button
				onClick={() => setShowDialog(true)}
				color="warning"
				variant="contained"
			>
				Vaciar carrito
			</Button>
			<Dialog
				PaperProps={{
					style: {
						backgroundColor: "#101010",
						color: "white",
					},
				}}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
				open={showDialog}
				onClose={() => setShowDialog(false)}
			>
				<DialogTitle id="dialog-title">¿Estás seguro?</DialogTitle>
				<DialogContent>
					<DialogContentText id="dialog-description" color={"white"}>
						¡Una vez que aceptes, no hay vuelta atras!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						onClick={() => setShowDialog(false)}
						color="error"
						variant="contained"
					>
						Cancelar
					</Button>
					<Button
						onClick={handleAceptar}
						color="success"
						variant="contained"
					>
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>

			{/* {cartContext.productos.map(producto => (
				<Item item={producto} key={producto.id}></Item>
			))} */}

			<Container display="flex">
				{cartContext.productos.map(producto => {
					return (
						<div className="contenedor-producto" key={producto.id}>
							<Item item={producto}></Item>
							<Button
								color="error"
								onClick={() =>
									cartContext.onEliminarProducto(producto.id)
								}
								variant="contained"
							>
								Eliminar producto
							</Button>
						</div>
					);
				})}
			</Container>
		</>
	);
};

export default Cart;
