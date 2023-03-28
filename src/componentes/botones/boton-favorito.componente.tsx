import "./boton-favorito.css";
import { FC } from "react";

/**
 * Propiedades del componente BotonFavorito.
 *
 * @typedef {Object} Props
 * @property {boolean} esFavorito - Indica si el elemento está marcado como favorito.
 * @property {function} [onClick] - Función que se ejecuta al hacer clic en el botón.
 */
interface Props {
	esFavorito: boolean;
	onClick?: () => void;
}

/**
 * Componente BotonFavorito.
 *
 * Muestra un botón con una estrella que indica si el elemento está marcado como favorito o no.
 *
 * @param {Props} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX del componente BotonFavorito.
 */
const BotonFavorito: FC<Props> = ({
	esFavorito,
	onClick,
}: Props): JSX.Element => {
	const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
	const alt = esFavorito ? "favorito" : "no favorito";

	return (
		<div className="boton-favorito" onClick={onClick}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default BotonFavorito;
