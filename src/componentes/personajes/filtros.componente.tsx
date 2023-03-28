import { useEffect, useState } from "react";
import "./filtros.css";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCharacterName } from "../../redux/slices/filterName";
import { setear } from "../../redux/slices/pageSlice";

/**
 * Componente Filtros.
 *
 * Muestra un campo de texto para filtrar los resultados por nombre.
 *
 * @returns {JSX.Element} Elemento JSX del componente Filtros.
 */

const Filtros = (): JSX.Element => {
	const [getName, setName] = useState<string>("");
	const dispatch = useAppDispatch();
	const getCount = useAppSelector((state) => state.page.value);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setear());
		setName(e.target.value);
		dispatch(getCharacterName({ name: e.target.value, page: getCount }));
	};

	useEffect(() => {
		dispatch(getCharacterName({ name: "", page: 1 }));
	}, [dispatch]);
	useEffect(() => {
		dispatch(getCharacterName({ name: getName, page: getCount }));
	}, [getCount, dispatch, getName]);

	return (
		<div className="filtros">
			<label htmlFor="nombre">Filtrar por nombre :</label>
			<input
				type="text"
				placeholder="Rick, Morty, Beth, Alien, ...etc"
				value={getName}
				name="nombre"
				onChange={handlerChange}
			/>
		</div>
	);
};

export default Filtros;
