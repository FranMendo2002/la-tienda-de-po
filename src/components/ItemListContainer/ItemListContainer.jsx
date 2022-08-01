import { Loading, Text } from "@nextui-org/react";
import "./ItemListContianer.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { categoryId } = useParams();

	useEffect(() => {
		// Hace esto despues de renderizarse --> montarse
		setIsLoading(true);

		const db = getFirestore();
		const productosCollection = collection(db, "productos");

		const q = categoryId
			? query(productosCollection, where("categoria", "==", categoryId))
			: productosCollection;
		getDocs(q).then(snapshot => {
			setProductos(
				snapshot.docs.map(doc => {
					return { ...doc.data(), idProducto: doc.id };
				})
			);

			setIsLoading(false);
		});
	}, [categoryId]); // Si el array del segundo parametro esta vacio, se va a ejecutar solo una vez
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
