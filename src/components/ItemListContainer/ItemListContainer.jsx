import { Loading, Text } from "@nextui-org/react";
import "./ItemListContianer.scss";

import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Hace esto despues de renderizarse --> montarse
		setIsLoading(true);
		setTimeout(() => {
			fetch("data.json")
				.then(resp => resp.json())
				.then(data => setProductos(data.productos));

			setIsLoading(false);
		}, 2000);
	}, []); // Si el array del segundo parametro esta vacio, se va a ejecutar solo una vez
	return (
		<section className="cuerpo">
			<Text h1 weight={"light"}>
				Bienvenido {greeting}
			</Text>
			<Text h2 weight={"light"}>
				Nuestra selección de productos
			</Text>
			{isLoading && (
				<Loading
					color="error"
					textColor="error"
					size="lg"
					css={{
						margin: "2rem",
					}}
				>
					Cargando
				</Loading>
			)}
			<ItemList productos={productos} />
		</section>
	);
};

export default ItemListContainer;
