import Logo from "../../assets/logo.jpg";
import "./Navbar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import { Button, Text } from "@nextui-org/react";
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
		icono: <PeopleAltOutlinedIcon />,
	},
	{
		id: 3,
		viewLink: "Accesorio",
		link: "/category/accesorio",
		icono: <LocalOfferOutlinedIcon />,
	},
	{
		id: 4,
		viewLink: "Juguete",
		link: "/category/juguete",
		icono: <LocalOfferOutlinedIcon />,
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
							<Button
								icon={item.icono}
								iconLeftCss="true"
								value={item.viewLink}
							>
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
