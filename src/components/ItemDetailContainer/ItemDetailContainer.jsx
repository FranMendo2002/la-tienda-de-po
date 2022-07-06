import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
	const { id } = useParams();
	const [item, setItem] = useState();
	const [categorias, setCategorias] = useState([]);

	const getItem = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				fetch("../data.json")
					.then(resp => resp.json())
					.then(data => {
						setCategorias(data.categorias);
						setItem(
							data.productos.find(
								producto => producto.id === parseInt(id)
							)
						);
					});
			}, 0);
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
