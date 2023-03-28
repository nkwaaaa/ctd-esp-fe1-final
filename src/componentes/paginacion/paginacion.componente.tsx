import "./paginacion.css";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrementPage, incrementPage } from "../../redux/slices/pageSlice";

/**
 * Componente Paginacion.
 *
 * Muestra botones para navegar entre las páginas de resultados.
 *
 * @returns {JSX.Element} Elemento JSX del componente Paginacion.
 */
const Paginacion = () => {
	const characters2 = useAppSelector((state) => state.filterByName.characters2);
	const max = useMemo(() => {
		if (characters2?.info) {
			return characters2?.info.pages;
		} else if (characters2?.error) {
			return 1;
		}
		return 1;
	}, [characters2]);
	const dispatch = useAppDispatch();
	const increment = () => {
		dispatch(incrementPage());
	};
	const decrement = () => {
		dispatch(decrementPage());
	};
	const currentPage = useAppSelector((state) => state.page.value);

	return (
		<div className="paginacion">
			<button
				onClick={decrement}
				disabled={currentPage === 1}
				className={"primary"}
			>
				Anterior
			</button>
			<button
				onClick={increment}
				disabled={currentPage === max}
				className={"primary"}
			>
				Siguiente
			</button>
		</div>
	);
};

export default Paginacion;
