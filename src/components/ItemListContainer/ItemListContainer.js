import { Text } from "@nextui-org/react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContianer.scss";

const ItemListContainer = ({ greeting }) => {
	return (
		<section className="cuerpo">
			<Text h1 weight={"light"}>
				Bienvenido {greeting}
			</Text>
			<Text h2 weight={"light"}>
				Nuestra selección de productos
			</Text>

			{/* <Contenedor></Contenedor> */}
			<ItemCount stock={4} initial={2} />
		</section>
	);
};

export default ItemListContainer;
