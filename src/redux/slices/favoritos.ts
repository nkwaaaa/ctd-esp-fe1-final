import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}

interface FavoritosState {
	favoritos: Character[];
}

const initialState: FavoritosState = {
	favoritos: [],
};

const favoritosSlice = createSlice({
	name: "favoritos",
	initialState,
	reducers: {
		guardarFavorito: (state, action: PayloadAction<Character>) => {
			state.favoritos = [...state.favoritos, action.payload];
		},
		eliminarFavorito: (state, action: PayloadAction<number>) => {
			const index = state.favoritos.findIndex((x) => x.id === action.payload);
			console.log(action.payload);
			state.favoritos.splice(index, 1);
		},
		eliminarFavoritos: (state) => {
			state.favoritos = [];
		},
	},
});

export const { guardarFavorito, eliminarFavorito, eliminarFavoritos } =
	favoritosSlice.actions;
export default favoritosSlice.reducer;
