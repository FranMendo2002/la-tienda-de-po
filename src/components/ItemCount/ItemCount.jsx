import { Button, Container, Input, Text } from "@nextui-org/react";
import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [cont, setCont] = useState(initial);

	const sumarCont = () => {
		if (cont === stock) return;
		setCont(cont + 1);
	};

	const restarCont = () => {
		if (cont === initial) return;
		setCont(cont - 1);
	};

	return (
		<div className="item-count">
			<Text size={18} margin={".5rem 0 1rem 0"} color="warning">
				Articulos restantes: {stock}
			</Text>

			<div className="botones">
				<Button size={"xs"} onPress={() => restarCont()}>
					-
				</Button>
				<Input
					size="sm"
					readOnly
					value={cont}
					rounded
					status="success"
					aria-label="contador"
				/>
				<Button size={"xs"} onPress={() => sumarCont()}>
					+
				</Button>
			</div>
			<Container
				className="container-agregar"
				display="flex"
				justify="center"
			>
				<Button
					size={"sm"}
					onPress={() => onAdd(cont)}
					disabled={stock === 0}
				>
					Agregar al carrito
				</Button>
			</Container>
		</div>
	);
};

export default ItemCount;
