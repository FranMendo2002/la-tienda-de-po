import { Container } from "@nextui-org/react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
	return (
		<>
			<Container display="flex" justify="center">
				{productos &&
					productos.map(producto => (
						<Item key={producto.id} item={producto} />
					))}
			</Container>
		</>
	);
};

export default ItemList;
