import {
	collection,
	getDocs,
	getFirestore,
	limit,
	query,
	where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
	const { id } = useParams();
	const [item, setItem] = useState();

	const getItem = () => {
		const db = getFirestore();
		const productosCollection = collection(db, "productos");
		const q = query(
			productosCollection,
			where("id", "==", parseInt(id), limit(1))
		);

		getDocs(q).then(snapshot => {
			setItem(snapshot.docs[0].data());
		});
	};

	useEffect(() => {
		getItem();
	}, []);

	return (
		<section className="cuerpo">
			{item && <ItemDetail item={item} />}
		</section>
	);
};

export default ItemDetailContainer;
