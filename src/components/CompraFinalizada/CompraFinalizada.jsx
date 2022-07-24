import { Button } from "@mui/material";
import { Container, Text } from "@nextui-org/react";
import { NavLink, useParams } from "react-router-dom";

const CompraFinalizada = () => {
	const { idCompra } = useParams();

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
