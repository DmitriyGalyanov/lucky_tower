import { configureStore } from '@reduxjs/toolkit';

import {gameSliceReducer} from './stateSlices';

export default configureStore({
	reducer: {
		gameSlice: gameSliceReducer,
	},
});