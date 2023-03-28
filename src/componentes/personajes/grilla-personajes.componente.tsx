import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

import { Character } from "../../interfaces/character";

/**
 * Propiedades del componente GrillaPersonajes.
 *
 * @typedef {Object} Props
 * @property {Character[]} data - Lista de personajes a mostrar en la grilla.
 */
interface Props {
	data: Character[];
}

/**
 * Componente GrillaPersonajes.
 *
 * Muestra una grilla de tarjetas con información de personajes.
 *
 * @param {Props} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX del componente GrillaPersonajes.
 */
const GrillaPersonajes = ({ data }: Props): JSX.Element => {
	return (
		<div className="grilla-personajes">
			{data.map((element) => (
				<TarjetaPersonaje key={element.id} character={element} />
			))}
		</div>
	);
};

export default GrillaPersonajes;
