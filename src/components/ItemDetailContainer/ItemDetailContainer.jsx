import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
	const [id, setId] = useState(2);
	const [item, setItem] = useState();

	const getItem = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				fetch("data.json")
					.then(resp => resp.json())
					.then(data => {
						setItem(
							data.productos.find(producto => producto.id === id)
						);
					});
			}, 2500);
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
