import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, ImageBackground, Text} from 'react-native';

import {playButtonBG} from 'images';
import {playButtonWidth, playButtonHeight, mainTextColor, mainTextFontSize} from '../constants';


PlayButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};
/**
 * Creates PlayButton
 * @param {{onPress: Function}} props
 */
export default function PlayButton({onPress}) {

	return (
		<TouchableOpacity onPress={onPress}>
			<ImageBackground
				source={playButtonBG}
				style={{
					width: playButtonWidth,
					height: playButtonHeight,
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
					Играть
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}