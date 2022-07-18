import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../../context/cart-context";

const CartWidget = () => {
	const cartContext = useContext(CartContext);

	return (
		<NavLink to="/cart">
			<Button startIcon={<ShoppingCartOutlined />} size="large">
				Carrito ({cartContext.onCantidadProductos()})
			</Button>
		</NavLink>
	);
};

export default CartWidget;
