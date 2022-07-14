import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
	return (
		<NavLink to="/cart">
			<Button startIcon={<ShoppingCartOutlined />} size="large">
				Carrito
			</Button>
		</NavLink>
	);
};

export default CartWidget;
