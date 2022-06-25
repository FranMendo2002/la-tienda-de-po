import { useEffect, useState } from "react";
import Hello from "./Hello";

const Contenedor = () => {
	const [name, setName] = useState(); // Nos da una variable y  una funcion que lo actualiza. Lo que esta entre parentesis es su valor inicial
	const [cont, setCont] = useState(0);

	const sumarContador = () => {
		setCont(cont + 1);
	};

	const [info, setInfo] = useState([]);
	useEffect(() => {
		// Hace esto despues de renderizarse --> montarse
		fetch("data.json")
			.then(resp => resp.json())
			.then(data => setInfo(data));
	}, []); // Si el array del segundo parametro esta vacio, se va a ejecutar solo una vez
	return (
		<>
			<Hello name={name}></Hello>
			<button onPress={() => setName("mundo")}>Click</button>
			<br></br>
			<button onPress={sumarContador}>
				Tocar para sumar al contador
			</button>
			<h1>El boton se tocó: {cont} veces</h1>
		</>
	);
};

export default Contenedor;
