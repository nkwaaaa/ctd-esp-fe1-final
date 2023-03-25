import { FC } from "react";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { get_character_name } from "../redux/slices/filterName";
import { CharactersResponse } from "../interfaces";

const PaginaInicio: FC = () => {
	const { characters2, loading2 } = useAppSelector(
		(state) => state.filterByName
	) as { characters2: CharactersResponse; loading2: boolean };
	console.log(characters2);
	const dispatch = useAppDispatch();
	const limpiar = () => {
		dispatch(get_character_name({ name: "", page: 1 }));
	};
	return (
		<div className="container">
			<div className="actions">
				<h3>Catálogo de Personajes</h3>
				<button className="danger" onClick={limpiar}>
					Limpiar Filtros
				</button>
			</div>
			<Filtros />
			<Paginacion />
			{loading2 ? (
				<h1>Cargando...</h1>
			) : (
				characters2.results && <GrillaPersonajes data={characters2.results} />
			)}
			{characters2.error ? <h1>Nada por aquí...</h1> : ""}
			<Paginacion />
		</div>
	);
};

export default PaginaInicio;
