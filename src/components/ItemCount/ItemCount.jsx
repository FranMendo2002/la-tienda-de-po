import { Button, Container, Input } from "@nextui-org/react";
import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial }) => {
	const [cont, setCont] = useState(initial);

	const sumarCont = () => {
		if (cont === stock) return;
		setCont(cont + 1);
	};

	const restarCont = () => {
		if (cont === 0) return;
		setCont(cont - 1);
	};

	const onAdd = () => {
		console.log(`Seleccionaste ${cont} articulos`);
	};

	return (
		<div className="item-count">
			<p>Stock: {stock}</p>
			<p>Cont: {cont}</p>

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
				<Button onPress={() => onAdd()} disabled={stock === 0}>
					Agregar al carrito
				</Button>
			</Container>
		</div>
	);
};

export default ItemCount;
