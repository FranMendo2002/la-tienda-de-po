import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
	const { idProducto } = useParams();
	const [item, setItem] = useState();

	const getItem = () => {
		const db = getFirestore();
		const productoRef = doc(db, "productos", idProducto);
		getDoc(productoRef).then(snapshot => {
			if (snapshot.exists()) {
				setItem({ ...snapshot.data(), idProducto });
			}
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
