import React from 'react';
import PropTypes from 'prop-types';

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


BetButtonsRow.propTypes = {
	disabled: PropTypes.bool,
};
/**
 * Creates a BetButtons row
 * @param {{disabled: ?boolean}} props
 */
export default function BetButtonsRow({disabled}) {
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
						disabled={disabled}
					/>
				)
			})}
		</View>
	)
}