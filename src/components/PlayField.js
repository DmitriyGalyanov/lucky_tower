import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import PlayTile from './PlayTile';

import {
	playFieldWidth,
	playFieldHeight,
	playTileWidth,
	playTileHeight,
	playTilesAmount,
} from '../constants';


PlayField.propTypes = {
	tilesDataArray: PropTypes.arrayOf(PropTypes.shape({
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		hides: PropTypes.string.isRequired,
	})),
	triggerFail: PropTypes.func.isRequired,
};
/**
 * Creates a Play Field of Rows of Tiles
 * If tilesArray is not filled -- creates a placeholder
 * @param {{tilesArray: [...object], triggerFail: Function}}
 */
export default function PlayField({tilesDataArray, triggerFail}) {

	const createTiles = () => {
		if (tilesDataArray?.length) {
			return tilesDataArray.map((tile, index) => {
				const {width, height, hides} = tile;

				return (
					<PlayTile key={index}
						width={width}
						height={height}
						hides={hides} // 'loss' || 'prize'
						isHidden={true}
						triggerFail={triggerFail}
					/>
				);
			});
		};

		let tiles = [];
		for(let i = 0; i < playTilesAmount; i++) {
			const hides = 'prize';
			let tile = (
				<PlayTile key={i}
					width={playTileWidth}
					height={playTileHeight}
					hides={hides} // 'loss' || 'prize'
					triggerFail={triggerFail}
				/>
			);

			tiles.push(tile);
		}
		return tiles;
	};

	return (
		<View
			style={{
				width: playFieldWidth,
				height: playFieldHeight,
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			{createTiles()}
		</View>
	)
}