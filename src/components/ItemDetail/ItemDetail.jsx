import { Button, Text } from "@nextui-org/react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
	const agregarAlCarrito = cant => {
		console.log(`Seleccionaste ${cant} articulos`);
	};

	return (
		<div className="contenedor_centrador">
			<div className="contenedor">
				<div className="contenedor_img">
					<img
						src={require(`../../assets/productos/${item.nombreArchivo}`)}
						alt="img"
					></img>
				</div>
				<div className="informacion">
					<div className="info_superior">
						<Text size={30}>{item.nombre}</Text>
						<Text size={20}>{item.descripcion}</Text>
						<Text color="error" size={20}>
							Encontralo en la sección "{item.categoria}"
						</Text>
					</div>
					<div className="info_inferior">
						<Text size={20}>{item.stock} articulos restantes</Text>
						<ItemCount
							initial={item.inicial}
							stock={item.stock}
							onAdd={agregarAlCarrito}
						/>
						<Button
							css={{
								margin: "1rem 0",
							}}
							color={"secondary"}
							rounded
							flat
						>
							$ {item.precio}
						</Button>
						<Button size="lg" color={"success"} bordered>
							Comprar ahora
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
