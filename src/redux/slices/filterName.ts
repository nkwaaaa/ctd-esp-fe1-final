import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL_CHARACTER_NAME = "https://rickandmortyapi.com/api/character/?name=";

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

interface CharactersResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: Character[];
}

interface NamePage {
	name: string;
	page: number;
}

export const get_character_name = createAsyncThunk<
	CharactersResponse,
	NamePage
>("characters/get_character_name", async (namePage, thunkAPI) => {
	try {
		//console.log(namePage);
		const response = await fetch(
			URL_CHARACTER_NAME + namePage.name + "&page=" + namePage.page
		);
		const data = await response.json();
		return data as CharactersResponse;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue(error);
	}
});

interface GetCharacterNameState {
	characters2: CharactersResponse | {};
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
			.addCase(get_character_name.pending, (state) => {
				state.loading2 = true;
			})
			.addCase(get_character_name.fulfilled, (state, action) => {
				state.characters2 = action.payload;
				state.loading2 = false;
			})
			.addCase(get_character_name.rejected, (state, action) => {
				state.loading2 = false;
			});
	},
});

export default getCharacterNameSlice.reducer;
