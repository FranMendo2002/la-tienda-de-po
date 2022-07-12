import { Button, Container, Text } from "@nextui-org/react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/cart-context";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
	const [mostrarCont, setMostrarCont] = useState(true);
	const cartContext = useContext(CartContext);

	const agregarAlCarrito = cant => {
		const productoAgregado = { ...item, cant };
		cartContext.onAgregarProducto(productoAgregado);
		setMostrarCont(false);
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
					</div>
					<div className="info_inferior">
						<Text size={20}>{item.stock} articulos restantes</Text>
						<Container display="flex" justify="center">
							{mostrarCont && (
								<ItemCount
									initial={item.inicial}
									stock={item.stock}
									onAdd={agregarAlCarrito}
								/>
							)}
						</Container>
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
						{!mostrarCont && (
							<NavLink to="/cart" className="navLink">
								<Button size="lg" color={"success"} bordered>
									Comprar ahora
								</Button>
							</NavLink>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
