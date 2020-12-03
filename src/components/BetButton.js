import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, ImageBackground, Text} from 'react-native';

import {betButtonBG} from 'images';
import {secondaryTextColor, secondaryTextFontSize} from '../constants';


BetButton.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	multiplier: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired,
};
/**
 * Creates BetButton which can trigger multiplyBet dispatch (function should be provided as onPress prop)
 * @param {{width: number, height: number, multiplier: number, onPress: Function}} props
 */
export default function BetButton({width, height, multiplier, onPress}) {

	return (
		<TouchableOpacity onPress={onPress}>
			<ImageBackground
				source={betButtonBG}
				style={{
					width: width,
					height: height,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						color: secondaryTextColor,
						fontSize: secondaryTextFontSize,
					}}
				>
					{multiplier}
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}