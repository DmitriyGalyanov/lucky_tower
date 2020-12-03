import {createSlice} from '@reduxjs/toolkit';

import {initialBalance, initialBet} from '../../constants';

import {createTilesData} from '../../helpers';


export const gameSlice = createSlice({
	name: 'gameData',
	initialState: {
		tilesDataArray: [],
		balance: initialBalance,
		bet: initialBet,
		luckyHits: 0,
	},

	reducers: {
		createTilesAction: (state) => {
			state.tilesDataArray = createTilesData();
		},

		multiplyBet: (state, action) => {
			const multiplier = action.payload;
			if (state.bet * multiplier > state.balance) return;
			state.bet = state.bet * multiplier;
		},
		resetBet: (state) => {
			state.bet = initialBet;
		},

		increaseLuckyHits: (state) => {
			state.luckyHits = state.luckyHits + 1;
		},
		resetLuckyHits: (state) => {
			state.luckyHits = 0;
		},

		changeBalance: (state, action) => {
			const amount = action.payload;
			state.balance = state.balance + amount;
			if (state.balance < state.bet) state.bet = state.balance;
			else if (state.balance <= 0) state.bet = 0;
		},
		resetBalance: (state) => {
			state.balance = initialBalance;
		},
	}
});

export const {
	createTilesAction,
	multiplyBet,
	resetBet,
	increaseLuckyHits,
	resetLuckyHits,
	changeBalance,
	resetBalance,
} = gameSlice.actions;

export const selectGameData = state => state.gameSlice;

export default gameSlice.reducer;