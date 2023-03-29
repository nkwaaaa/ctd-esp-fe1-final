import { RefObject, useEffect, useState } from "react";
import "./filtros.css";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCharacterName } from "../../redux/slices/filterName";
import { setear } from "../../redux/slices/pageSlice";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
	filterRef: RefObject<HTMLInputElement>;
}

const Filtros = ({ filterRef }: Props): JSX.Element => {
	const [getName, setName] = useState<string>("");
	const dispatch = useAppDispatch();
	const getCount = useAppSelector((state) => state.page.value);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setear());
		setName(e.target.value);
	};

	const debouncedFromText = useDebounce(getName, 500);

	useEffect(() => {
		dispatch(getCharacterName({ name: "", page: 1 }));
	}, [dispatch]);

	useEffect(() => {
		dispatch(getCharacterName({ name: debouncedFromText, page: getCount }));
	}, [getCount, dispatch, debouncedFromText]);

	return (
		<div className="filtros">
			<label htmlFor="nombre">Filtrar por nombre :</label>
			<input
				type="text"
				placeholder="Rick, Morty, Beth, Alien, ...etc"
				name="nombre"
				onChange={handlerChange}
				ref={filterRef}
			/>
		</div>
	);
};

export default Filtros;
