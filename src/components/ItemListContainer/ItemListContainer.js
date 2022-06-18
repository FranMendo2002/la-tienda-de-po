import { Text } from "@nextui-org/react";

const ItemListContainer = ({ greeting }) => {
	return (
		<section className="cuerpo">
			<Text h1 weight={"light"}>
				Bienvenido {greeting}
			</Text>
			<Text h2 weight={"light"}>
				Nuestra selección de productos
			</Text>
		</section>
	);
};

export default ItemListContainer;
