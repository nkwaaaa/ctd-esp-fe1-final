import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		sum: (state) => {
			state.value += 1;
		},
		res: (state) => {
			state.value -= 1;
		},
		setear: (state) => {
			state.value = 1;
		},
	},
});

export const { sum, res, setear } = pageSlice.actions;
export default pageSlice.reducer;
