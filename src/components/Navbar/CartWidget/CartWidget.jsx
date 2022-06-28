import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@nextui-org/react";

const CartWidget = () => {
	return (
		<Button icon={<ShoppingCartOutlined />} iconLeftCss="true">
			Carrito
		</Button>
	);
};

export default CartWidget;
