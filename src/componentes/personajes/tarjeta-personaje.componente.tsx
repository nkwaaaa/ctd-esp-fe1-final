import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	eliminarFavorito,
	guardarFavorito,
} from "../../redux/slices/favoritos";
import { Character } from "../../interfaces";

/**
 * Propiedades del componente TarjetaPersonaje.
 *
 * @typedef {Object} Props
 * @property {Character} character - Personaje a mostrar en la tarjeta.
 */
interface Props {
	character: Character;
}

/**
 * Componente TarjetaPersonaje.
 *
 * Muestra una tarjeta con información de un personaje y un botón para marcarlo como favorito.
 *
 * @param {Props} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX del componente TarjetaPersonaje.
 */
const TarjetaPersonaje = ({ character }: Props) => {
	const favoritos = useAppSelector((state) => state.favoritos);
	const dispatch = useAppDispatch();
	const [fav, setFav] = useState(false);

	const guardar = () => {
		if (fav === false) {
			setFav(true);
			dispatch(
				guardarFavorito({
					id: character.id,
					name: character.name,
					image: character.image,
					status: "",
					species: "",
					type: "",
					gender: "",
					origin: {
						name: "",
						url: "",
					},
					location: {
						name: "",
						url: "",
					},
					episode: [],
					url: "",
					created: "",
				})
			);
		} else {
			setFav(false);
			dispatch(eliminarFavorito(character.id));
		}
	};

	useEffect(() => {
		const esFavorito = favoritos.favoritos.some(
			(element) => element.id === character.id
		);
		setFav(esFavorito);
	}, [character, favoritos]);

	return (
		<div className="tarjeta-personaje">
			<img src={character.image} alt={character.name} />
			<div className="tarjeta-personaje-body">
				<span>{character.name}</span>
				<div onClick={guardar}>
					<BotonFavorito esFavorito={fav} />
				</div>
			</div>
		</div>
	);
};

export default TarjetaPersonaje;
