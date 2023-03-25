import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { eliminarFavoritos } from "../redux/slices/favoritos";

const PaginaFavoritos = () => {
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
