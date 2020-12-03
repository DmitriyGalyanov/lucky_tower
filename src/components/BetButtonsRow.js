import React from 'react';

import {View} from 'react-native';
import BetButton from './BetButton';

import {useDispatch} from 'react-redux';
import {multiplyBet} from '../redux/stateSlices';

import {
	betButtonsMultipliers,
	betButtonsRowWidth,
	betButtonWidth,
	betButtonHeight,
} from '../constants';


export default function BetButtonsRow() {
	const dispatch = useDispatch();

	return (
		<View
			style={{
				width: betButtonsRowWidth,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			{betButtonsMultipliers.map((multiplier, index) => {
				return (
					<BetButton key={index}
						width={betButtonWidth}
						height={betButtonHeight}
						multiplier={multiplier}
						onPress={() => dispatch(multiplyBet(multiplier))}
					/>
				)
			})}
		</View>
	)
}