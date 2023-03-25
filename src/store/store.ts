import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";
import favouritesSlice from "./slices/favouritesSlice";
import selectedCharacterSlice from "./slices/selectedCharacterSlice";

const store = configureStore({
	reducer: {
		data: characterSlice,
		fav: favouritesSlice,
		selected: selectedCharacterSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
