import { useEffect, useState } from "react";

/**
 * Hook useDebounce.
 *
 * Retrasa la actualización de un valor por una cantidad de tiempo especificada.
 *
 * @template T
 * @param {T} value - El valor a retrasar.
 * @param {number} [delay=500] - La cantidad de tiempo en milisegundos para retrasar la actualización del valor.
 * @returns {T} El valor retrasado.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}
