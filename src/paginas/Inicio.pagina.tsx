import { FC, useRef } from "react";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCharacterName } from "../redux/slices/filterName";
import { CharactersResponse } from "../interfaces";

const PaginaInicio: FC = () => {
	const { characters2, loading2 } = useAppSelector(
		(state) => state.filterByName
	) as { characters2: CharactersResponse; loading2: boolean };

	const dispatch = useAppDispatch();
	const clear = () => {
		if (filterRef.current) {
			dispatch(getCharacterName({ name: "", page: 1 }));
			filterRef.current.value = "";
		}
	};

	const filterRef = useRef<HTMLInputElement>(null);
	return (
		<div className="container">
			<div className="actions">
				<h3>Catálogo de Personajes</h3>
				<button className="danger" onClick={clear}>
					Limpiar Filtros
				</button>
			</div>
			<Filtros filterRef={filterRef} />
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
