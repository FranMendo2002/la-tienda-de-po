import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Container } from "@nextui-org/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/cart-context";
import UserContext from "../../context/user-context";
import "./UserForm.scss";

const UserForm = props => {
	const [openDialog, setOpenDialog] = useState();
	const userContext = useContext(UserContext);
	const cartContext = useContext(CartContext);
	const navigate = useNavigate();

	const [nombreInput, setNombreInput] = useState();
	const [telefonoInput, setTelefonoInput] = useState();
	const [emailInput, setEmailImput] = useState();

	useEffect(() => {
		setNombreInput(userContext.nombre);
		setTelefonoInput(userContext.telefono);
		setEmailImput(userContext.email);
	}, []);

	const handleNombreChange = e => {
		setNombreInput(e.target.value);
	};

	const handleTelefonoChange = e => {
		setTelefonoInput(e.target.value);
	};

	const handleEmailChange = e => {
		setEmailImput(e.target.value);
	};

	const handleCerrarDialog = () => {
		props.setOpenDialog(false);
	};

	const handleComprar = () => {
		const db = getFirestore();
		const ordenesCollection = collection(db, "ordenes");

		const orden = {
			comprador: {
				nombre: userContext.nombre,
				telefono: userContext.telefono,
				email: userContext.email,
			},
			items: cartContext.productos.map(producto => {
				return {
					id: producto.id,
					nombre: producto.nombre,
					precio: producto.precio,
					cant: producto.cant,
				};
			}),
			fecha: Date.now(),
			total: cartContext.onPrecioTotal(),
		};

		addDoc(ordenesCollection, orden).then(({ id }) => {
			cartContext.onRestarStock();
			navigate(`/compra/${id}`);
		});
	};

	const handleGuardarDialog = () => {
		userContext.onGuardarUsuario({
			nombre: nombreInput,
			telefono: telefonoInput,
			email: emailInput,
		});

		handleCerrarDialog();
	};

	const handlePuedeComprar = () => {
		return (
			props.isInCart &&
			userContext.nombre !== "" &&
			userContext.telefono !== "" &&
			userContext.email !== ""
		);
	};

	return (
		<Dialog
			PaperProps={{
				style: {
					margin: "rem",
				},
			}}
			open={props.openDialog}
			onClose={handleCerrarDialog}
		>
			<DialogTitle>Informacion del usuario</DialogTitle>
			<DialogContent>
				<Container
					className="dialog-content"
					display="flex"
					direction="column"
				>
					<FormControl className="form-control">
						<InputLabel htmlFor="nombre">Nombre</InputLabel>
						<Input
							id="nombre"
							type="text"
							aria-describedby="nombre-helper"
							value={nombreInput}
							onChange={handleNombreChange}
							required
						></Input>
						<FormHelperText id="nombre-helper">
							Nombre al cual se registrará la compra
						</FormHelperText>
					</FormControl>
					<FormControl className="form-control">
						<InputLabel htmlFor="telefono">Telefono</InputLabel>
						<Input
							id="telefono"
							type="number"
							value={telefonoInput}
							aria-describedby="telefono-helper"
							onChange={handleTelefonoChange}
							required
						></Input>
						<FormHelperText id="telefono-helper">
							Telefono al cual se registrará la compra
						</FormHelperText>
					</FormControl>
					<FormControl className="form-control">
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input
							id="email"
							type="email"
							value={emailInput}
							aria-describedby="email-helper"
							onChange={handleEmailChange}
							required
						></Input>
						<FormHelperText id="email-helper">
							Correo electronico al cual se registrará la compra
						</FormHelperText>
					</FormControl>
				</Container>
			</DialogContent>
			<DialogActions>
				<Button
					variant="outlined"
					onClick={handleCerrarDialog}
					color="error"
				>
					Cerrar
				</Button>
				<Button
					variant="outlined"
					onClick={handleGuardarDialog}
					color="secondary"
				>
					Guardar
				</Button>
				{handlePuedeComprar() && (
					<Button onClick={handleComprar} color="success">
						Comprar
					</Button>
				)}
			</DialogActions>
		</Dialog>
	);
};

export default UserForm;
