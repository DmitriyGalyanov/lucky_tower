import React from 'react';
import PropTypes from 'prop-types';

import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

import {
	mainTextColor,
	mainTextFontSize,
} from '../constants';


BetIndicator.propTypes = {
	bet: PropTypes.number.isRequired,
};
/**
 * Creates a bet indicator
 * @param {{bet: number}}
 */
export default function BetIndicator({bet}) {

	return (
		<View style={styles.wrap}>
			<Text style={styles.text}>
				Сумма ставки:
			</Text>
			<Text style={styles.text}>
				{bet.toFixed(1)}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		color: mainTextColor,
		fontSize: mainTextFontSize,
		fontWeight: 'bold',
	},
});