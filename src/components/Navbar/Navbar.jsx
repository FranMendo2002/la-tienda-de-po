import Logo from "../../assets/logo.jpg";
import "./Navbar.scss";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import Button from "@mui/material/Button";
import { Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const itemsMenu = [
	{
		id: 1,
		viewLink: "Inicio",
		link: "/",
		icono: <HomeOutlinedIcon />,
	},
	{
		id: 2,
		viewLink: "Ropa",
		link: "/category/ropa",
		icono: <CheckroomIcon />,
	},
	{
		id: 3,
		viewLink: "Accesorio",
		link: "/category/accesorio",
		icono: <AttachFileIcon />,
	},
	{
		id: 4,
		viewLink: "Juguete",
		link: "/category/juguete",
		icono: <SmartToyIcon />,
	},
];

function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/">
				<img src={Logo} className="logo" alt="logo"></img>
			</NavLink>
			<Text size="1.25rem" className="titulo">
				La Tienda de Po
			</Text>
			<div className="links">
				{itemsMenu.map((item, index) => {
					// Los botones del menú
					return (
						<NavLink to={item.link} key={item.id}>
							<Button startIcon={item.icono} size="large">
								{item.viewLink}
							</Button>
						</NavLink>
					);
				})}
			</div>

			<CartWidget />
		</div>
	);
}

export default Navbar;
