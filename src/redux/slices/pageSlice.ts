import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		incrementPage: (state) => {
			state.value += 1;
		},
		decrementPage: (state) => {
			state.value -= 1;
		},
		setear: (state) => {
			state.value = 1;
		},
	},
});

export const { incrementPage, decrementPage, setear } = pageSlice.actions;
export default pageSlice.reducer;
