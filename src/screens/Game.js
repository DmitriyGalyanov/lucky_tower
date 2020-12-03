import React, { useEffect, useState } from 'react';

import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Alert,
	ScrollView,
} from 'react-native';
import {InstructionsOverlay} from '../overlays';
import {
	HidingButton,
	PlayField,
	BetIndicator,
	BetButtonsRow,
	PlayButton,
} from '../components';

import {useDispatch, useSelector} from 'react-redux';
import {
	createTilesAction,
	selectGameData,
	resetBalance,
	resetLuckyHits,
	changeBalance,
	resetBet,
} from '../redux/stateSlices';

import {background} from 'images';
import {
	windowHeight,
	windowWidth,
	gameScreenPadding,
	mainTextColor,
	mainTextFontSize,
	multipliersArray,
} from '../constants';


/**
 * Creates a Game instance (fills whole screen)
 */
export default function Game() {
	const [running, setRunning] = useState(false);

	const dispatch = useDispatch();
	const {tilesDataArray, balance, bet, luckyHits} = useSelector(selectGameData);
	const [playFieldIndex, setPlayFieldIndex] = useState(0);
	const createField = () => {
		dispatch(createTilesAction());
		setPlayFieldIndex(playFieldIndex + 1);
	};
	useEffect(() => {
		createField();
	}, []);

	const triggerFail = () => {
		dispatch(resetLuckyHits());
		dispatch(changeBalance(-bet));
		if (balance === bet) return;
		Alert.alert(
			'Не повезло',
			'',
			[
				{
					text: 'Продолжить',
					onPress: () => createField(),
				},
			],
			{ cancelable: false }
		);
	};

	const restart = () => {
		dispatch(resetBalance());
		dispatch(resetBet());
		createField();
	};

	const multiplier = multipliersArray[luckyHits];

	useEffect(() => {
		if (bet === 0) {
			Alert.alert(
				'Баланс на нуле',
				'',
				[
					{
						text: 'Обновить баланс',
						onPress: () => restart(),
					},
				],
				{ cancelable: false }
			);
		}
	}, [bet]);

	const checkIfWin = () => {
		if (luckyHits === 3) {
			dispatch(changeBalance(bet));
			dispatch(resetLuckyHits());
			Alert.alert(
				'Повезло',
				`Выигрыш: ${bet}`,
				[
					{
						text: 'Продолжить',
						onPress: () => createField(),
					},
				],
				{ cancelable: false }
			);
		}
	};
	useEffect(() => {
		checkIfWin();
	}, [luckyHits]);


	return (
		<ImageBackground
			source={background}
			style={styles.background}
		>
			{!running && (
				<InstructionsOverlay
					start={() => setRunning(true)}
				/>
			)}
			{running && (
				<ScrollView
					contentContainerStyle={styles.wrap}
				>
					<View style={styles.balanceInterface}>
						{balance > 1000 && (
							<View style={styles.showInstructionsButtonWrap}>
								<HidingButton
									title='Инструкция'
									onPress={() => setRunning(false)}
								/>
							</View>
						)}
						{balance < 1000 && (
							<View style={styles.resetBalanceButtonWrap}>
								<HidingButton
									title='Обновить баланс'
									onPress={() => dispatch(resetBalance())}
									isHidden={balance > 1000}
								/>
							</View>
						)}
						<View style={styles.multiplierAndBalanceIndicatorsWrap}>
							<Text style={styles.balanceIndicator}>
								Баланс: {balance}
							</Text>
							<Text style={styles.multiplierIndicator} >
								Множ: {multiplier}
							</Text>
						</View>
					</View>
					<View style={styles.playZone}>
						<PlayField key={playFieldIndex}
							tilesDataArray={tilesDataArray}
							triggerFail={triggerFail}
						/>
						<View style={styles.betIndicatorWrap}>
							<BetIndicator bet={bet} />
						</View>
						<View style={styles.betButtonRowWrap}>
							<BetButtonsRow />
						</View>
						<View style={styles.playButtonWrap}>
							<PlayButton onPress={createField} />
						</View>
					</View>
				</ScrollView>
			)}
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},

	wrap: {
		minHeight: windowHeight * 0.98,
		padding: gameScreenPadding,
	},

	balanceInterface: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 14,
	},

	showInstructionsButtonWrap: {
		width: (windowWidth - gameScreenPadding * 2) / 2 - 20,
		alignSelf: 'center',
	},

	resetBalanceButtonWrap: {
		width: (windowWidth - gameScreenPadding * 2) / 2 - 20,
		alignSelf: 'center',
		//20 = desired gap between balance reset button and balance indicator
	},

	multiplierAndBalanceIndicatorsWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	balanceIndicator: {
		color: mainTextColor,
		fontSize: mainTextFontSize,
		alignSelf: 'center',
	},

	multiplierIndicator: {
		color: mainTextColor,
		fontSize: mainTextFontSize,
		alignSelf: 'center',
	},

	playZone: {
		alignSelf: 'center',
		alignItems: 'center',
	},

	betIndicatorWrap: {
		marginTop: 14,
	},

	betButtonRowWrap: {
		marginTop: 14,
	},

	playButtonWrap: {
		marginVertical: 14,
	},
});