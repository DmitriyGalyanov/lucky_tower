import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, ImageBackground, Text} from 'react-native';

import {
	actionButtonWidth, actionButtonHeight,
	mainTextColor, mainTextFontSize} from '../constants';


ActionButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};
/**
 * Creates ActionButton
 * @param {{title: string, onPress: Function}} props
 */
export default function ActionButton({title, onPress, disabled}) {
	const background = disabled
		? require('images/disabledActionButtonBG.png')
		: require('images/actionButtonBG.png');

	return (
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<ImageBackground
				source={background}
				style={{
					width: actionButtonWidth,
					height: actionButtonHeight,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						color: mainTextColor,
						fontSize: mainTextFontSize,
					}}
				>
					{title}
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}