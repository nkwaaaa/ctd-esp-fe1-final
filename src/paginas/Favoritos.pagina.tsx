import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { eliminarFavoritos } from "../redux/slices/favoritos";

/**
 * Componente PaginaFavoritos.
 *
 * Muestra una página con los personajes favoritos del usuario y un botón para eliminarlos todos.
 *
 * @returns {JSX.Element} Elemento JSX del componente PaginaFavoritos.
 */
const PaginaFavoritos = (): JSX.Element => {
	const favoritos = useAppSelector((state) => state.favoritos);
	const dispatch = useAppDispatch();
	const eliminar = () => {
		dispatch(eliminarFavoritos());
	};
	return (
		<div className="container">
			<div className="actions">
				<h3>Personajes Favoritos</h3>
				<button onClick={eliminar} className="danger">
					Eliminar todos los favoritos
				</button>
			</div>
			<GrillaPersonajes data={favoritos.favoritos} />
		</div>
	);
};

export default PaginaFavoritos;
