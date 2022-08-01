import { Button } from "@mui/material";
import { Container, Text } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CartContext from "../../context/cart-context";

const CompraFinalizada = () => {
	const { idCompra } = useParams();
	const cartContext = useContext(CartContext);

	useEffect(() => {
		cartContext.onVaciarCarrito();
	}, []);

	return (
		<Container>
			<Text size={30}>
				¡Listo! El numero de compra que acabas de realizar es{" "}
				<Text b>{idCompra}</Text>
			</Text>
			<NavLink to="/">
				<Button>Volver al inicio</Button>
			</NavLink>
		</Container>
	);
};

export default CompraFinalizada;
