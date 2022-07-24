import React, { useEffect, useState } from "react";

const UserContext = React.createContext({
	nombre: "",
	telefono: "",
	email: "",
	onGuardarUsuario: ({ nombre, telefono, email }) => {},
});

export const UserContextProvider = ({ children }) => {
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {}, [nombre, telefono, email]);

	const guardarUsuarioHandler = usuario => {
		setNombre(usuario.nombre);
		setTelefono(usuario.telefono);
		setEmail(usuario.email);
	};

	return (
		<UserContext.Provider
			value={{
				nombre,
				telefono,
				email,
				onGuardarUsuario: guardarUsuarioHandler,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
