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
	playTileWidth,
	playTileHeight,
	playTilesInRowAmount,
	playRowsAmount,
} from './constants';

/**
 * @returns array filled with tiles data (objects) needed to create a PlayField
 */
export const createTilesData = () => {
	let tilesDataArray = [];
	for(let i = 0; i < playRowsAmount; i++) {
		const lossItemPosition = getRandomIntInclusive(0, 2);

		for(let z = 0; z < playTilesInRowAmount; z++) {
			const hides = z === lossItemPosition
				? 'loss'
				: 'prize';

			let tileData = {
				rowNumber: i,
				width: playTileWidth,
				height: playTileHeight,
				hides: hides, // 'loss' || 'prize'
			};

			tilesDataArray.push(tileData);
		}
	}

	return(tilesDataArray.reverse());
};
