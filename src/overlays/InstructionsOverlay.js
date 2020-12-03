import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, Text} from 'react-native';
import {HidingButton} from '../components';

import {mainOverlaysColor,
	neededLuckyHitsAmount,
	mainTextColor,
	mainTextFontSize} from '../constants';


InstructionsOverlay.propTypes = {
	start: PropTypes.func.isRequired,
};
/**
 * Renders an Overlay showing simple game instructions and the start Button
 * @param {{start: function}} props
 */
export default function InstructionsOverlay({start}) {

	return (
		<View
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
				flex: 1,
				backgroundColor: mainOverlaysColor,
				justifyContent: 'center',
				alignItems: 'center',
				paddingBottom: 180,
			}}
		>
			<Text style={styles.text}>
				За квадратами скрываются мины и монеты
			</Text>
			<Text style={styles.text}>
				Для победы нужно найти {neededLuckyHitsAmount} монеты подряд
			</Text>
			<Text style={[styles.text, {marginBottom: 34}]}>
				При открытии мины ставка сгорает
			</Text>
			<HidingButton
				title='Start!'
				onPress={start}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: mainTextColor,
		fontSize: mainTextFontSize,
		textAlign: 'center',
		marginTop: 20,
	}
});