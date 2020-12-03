import React from 'react';
import PropTypes from 'prop-types';

import {TouchableOpacity, View, Text} from 'react-native';

import {mainButtonsColor, mainButtonsTextColor, mainButtonsTextFontSize} from '../constants';


HidingButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	isHidden: PropTypes.bool,
};
/**
 * Creates a Button which can be Hidden (it will affect layout but will be invisible and will not respond to touches)
 * @param {{title: string, onPress: function, isHidden: boolean}} props
 */
export default function HidingButton({title, onPress, isHidden}) {

	return (
		<TouchableOpacity onPress={onPress} disabled={isHidden}>
			<View
				style={{
					alignSelf: 'center',
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 30,
					paddingVertical: 12,
					borderRadius: 10,
					backgroundColor: mainButtonsColor,
					opacity: isHidden ? 0 : 1,
				}}
			>
				<Text
					style={{
						fontSize: mainButtonsTextFontSize,
						fontWeight: 'bold',
						color: mainButtonsTextColor,
						flexWrap: 'wrap',
						textAlign: 'center',
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	)
};