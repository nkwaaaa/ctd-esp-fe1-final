import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "../slices/favoritos";
import filterByNameReducer from "../slices/filterName";
import getCharacterReducer from "../slices/getCharacterSlice";
import pageReducer from "../slices/pageSlice";
const store = configureStore({
	reducer: {
		pageCharacters: getCharacterReducer,
		page: pageReducer,
		filterByName: filterByNameReducer,
		favoritos: favoritosReducer,
	},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
