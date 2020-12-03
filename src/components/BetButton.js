import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, ImageBackground, Text} from 'react-native';

import {secondaryTextColor, secondaryTextFontSize} from '../constants';


BetButton.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	multiplier: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};
/**
 * Creates BetButton which can trigger multiplyBet dispatch (function should be provided as onPress prop)
 * @param {{width: number, height: number, multiplier: number, onPress: Function, disabled: ?boolean}} props
 */
export default function BetButton({width, height, multiplier, onPress, disabled}) {
	const background = disabled
		? require('images/disabledBetButtonBG.png')
		: require('images/betButtonBG.png');

	return (
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<ImageBackground
				source={background}
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
					x{multiplier}
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}