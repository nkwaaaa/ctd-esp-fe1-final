import { CharactersResponse } from "../../interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL_CHARACTER_PAGE = "https://rickandmortyapi.com/api/character/?page=";

export const getCharacterPage = createAsyncThunk<CharactersResponse, number>(
	"characters/getCharacterPage",
	async (number, thunkAPI) => {
		try {
			const response = await fetch(URL_CHARACTER_PAGE + number);
			const data = await response.json();

			return data as CharactersResponse;
		} catch (error) {
			//console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface GetCharacterState {
	characters: CharactersResponse | {};
	loading: boolean;
}
const getCharacterSlice = createSlice({
	name: "pageCharacters",
	initialState: {
		characters: {},
		loading: false,
	} as GetCharacterState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacterPage.pending, (state) => {
				state.loading = true;
			})
			.addCase(getCharacterPage.fulfilled, (state, action) => {
				state.characters = action.payload;
				state.loading = false;
			})
			.addCase(getCharacterPage.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export default getCharacterSlice.reducer;
