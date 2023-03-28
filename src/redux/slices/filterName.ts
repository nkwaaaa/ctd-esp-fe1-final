import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CharactersResponse } from "../../interfaces";

const URL_CHARACTER_NAME = "https://rickandmortyapi.com/api/character/?name=";

interface NamePage {
	name: string;
	page: number;
}

export const getCharacterName = createAsyncThunk<CharactersResponse, NamePage>(
	"characters/getCharacterName",
	async (namePage, thunkAPI) => {
		try {
			const response = await fetch(
				URL_CHARACTER_NAME + namePage.name + "&page=" + namePage.page
			);
			const data = await response.json();
			return data as CharactersResponse;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface GetCharacterNameState {
	characters2: CharactersResponse | null;
	loading2: boolean;
}

const getCharacterNameSlice = createSlice({
	name: "nameCharacters",
	initialState: {
		characters2: {},
		loading2: false,
	} as GetCharacterNameState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacterName.pending, (state) => {
				state.loading2 = true;
			})
			.addCase(getCharacterName.fulfilled, (state, action) => {
				state.characters2 = action.payload;
				state.loading2 = false;
			})
			.addCase(getCharacterName.rejected, (state, action) => {
				state.loading2 = false;
			});
	},
});

export default getCharacterNameSlice.reducer;
