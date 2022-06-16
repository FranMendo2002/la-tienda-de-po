import { Button } from "@nextui-org/react";
import Logo from "../assets/logo.jpg";
import "./Navbar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const itemsMenu = [
	{ viewLink: "Inicio", link: "/", icono: <HomeOutlinedIcon /> },
	{
		viewLink: "Nosotros",
		link: "/nosotros",
		icono: <PeopleAltOutlinedIcon />,
	},
	{ viewLink: "Tienda", link: "/tienda", icono: <LocalOfferOutlinedIcon /> },
	{
		viewLink: "Carrito",
		link: "/carrito",
		icono: <ShoppingCartOutlinedIcon />,
	},
];

const loginMenu = [
	{ viewLink: "Iniciar sesión", link: "login", icono: <LoginOutlinedIcon /> },
];

function Navbar() {
	return (
		<div className="navbar">
			<img src={Logo} className="logo" alt="logo"></img>
			<div className="links">
				{itemsMenu.map(item => {
					// Los botones del menú
					return (
						<Button
							icon={item.icono}
							iconLeftCss="true"
							value={item.viewLink}
						>
							{item.viewLink}
						</Button>
					);
				})}
			</div>

			<div className="login">
				{loginMenu.map(item => {
					// Los botones del menú
					return (
						<Button
							icon={item.icono}
							iconLeftCss="true"
							value={item.viewLink}
						>
							{item.viewLink}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default Navbar;
