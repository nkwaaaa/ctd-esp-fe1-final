import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../interfaces";

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
			state.favoritos = state.favoritos.filter((x) => x.id !== action.payload);
		},
		eliminarFavoritos: (state) => {
			state.favoritos = [];
		},
	},
});

export const { guardarFavorito, eliminarFavorito, eliminarFavoritos } =
	favoritosSlice.actions;
export default favoritosSlice.reducer;
