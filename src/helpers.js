/**
 * @param {number} min
 * @param {number} max
 * @returns random Int lesser or equal to MAX and greater or equal to MIN
 */
export const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


import {
	playTilesAmount,
	winningItemProbability,
	maxLossItemsAmount,
	playTileWidth,
	playTileHeight,
} from './constants';

/**
 * @returns array filled with tiles data (objects) needed to create a PlayField
 */
export const createTilesData = () => {
	let tilesDataArray = [];
	let lossItemsAmount = 0;
	for(let i = 0; i < playTilesAmount; i++) {
		const hides = getRandomIntInclusive(1, 100) > winningItemProbability
			|| lossItemsAmount >= maxLossItemsAmount
				? 'prize'
				: 'loss';
		if (hides === 'loss') lossItemsAmount++;
		let tileData = {
				width: playTileWidth,
				height: playTileHeight,
				hides: hides, // 'loss' || 'prize'
		};

		tilesDataArray.push(tileData);
	}
	return(tilesDataArray);
};
