import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Card, Container, Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import "./Item.scss";

const PrecioButton = styled(Button)({
	marginTop: "1rem",
});

const Item = ({ item }) => {
	return (
		<>
			<Card
				css={{
					mw: "20rem",
					padding: "0",
					margin: "1rem",
				}}
			>
				<Card.Header>
					<Container
						display="flex"
						direction="column"
						className="container"
					>
						<Text b margin={".5rem 0"}>
							{item.nombre}
						</Text>
						<Card.Image
							objectFit="cover"
							className="img-producto"
							width={"10rem"}
							height={"10rem"}
							src={require(`../../assets/productos/${item.nombreArchivo}`)}
							alt={item.nombre}
							css={{
								borderRadius: "1rem",
							}}
						/>
					</Container>
				</Card.Header>
				<Card.Divider />
				<Card.Body
					css={{
						padding: ".5rem 0",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Container
						display="flex"
						alignItems="center"
						justify="center"
						direction="column"
					>
						<Text
							b
							size={16}
							css={{
								textAlign: "center",
							}}
						>
							{item.descripcion}
						</Text>
						<Text transform="capitalize">{item.categoria}</Text>
						<PrecioButton
							className="boton-precio"
							color="success"
							variant="contained"
						>
							$ {item.precio}
						</PrecioButton>
					</Container>
				</Card.Body>
				<Card.Divider />
				<Card.Footer
					css={{
						padding: 0,
						display: "flex",
						justifyContent: "center",
						p: "1rem 0",
					}}
				>
					<NavLink to={`/item/${item.id}`}>
						<Button variant="contained">Ir al detalle</Button>
					</NavLink>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Item;
