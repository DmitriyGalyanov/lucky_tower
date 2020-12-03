import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, View, Image} from 'react-native';

import {useDispatch} from 'react-redux';
import {increaseLuckyHits} from '../redux/stateSlices';

import {playTileBGColor} from '../constants';
import images from 'images';


PlayTile.propTypes = {
	rowNumber: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	hides: PropTypes.string.isRequired,
	triggerFail: PropTypes.func.isRequired,
};
/**
 * Creates a PlayTile
 * @param {{rowNumber: number, width: number, height: number, hides: string, triggerFail: Function}} props
 * Can hide loss or prize
 */
export default function PlayTile({rowNumber, width, height, hides, triggerFail}) {
	const dispatch = useDispatch();

	const [showHiddenImage, setShowHiddenImage] = useState(true);
	//will depend on init image Animated value
	const hiddenImage = hides === 'prize'
		? images.prizeItem
		: images.lossItem;

	const handlePress = () => {
		console.log(rowNumber)
		setShowHiddenImage(true);
		if (hides === 'prize') {
			dispatch(increaseLuckyHits());
		} else {
			triggerFail();
		}
	};

	return (
		<TouchableOpacity
			onPress={handlePress}
			// disabled={showHiddenImage}
		>
			<View
				style={{
					width: width,
					height: height,
					backgroundColor: playTileBGColor,
				}}
			>
				{showHiddenImage && (
					<Image
						source={hiddenImage}
						style={{width: width, height: height}}
					/>
				)}
				{!showHiddenImage && (
					<Image
						source={images.preClickTileBG}
						style={{width: width, height: height}}
					/>
				)}
			</View>
		</TouchableOpacity>
	)
}