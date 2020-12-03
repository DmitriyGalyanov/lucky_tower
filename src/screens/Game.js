import React, { useEffect, useState } from 'react';

import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Alert,
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
	gameScreenPadding,
	mainTextColor,
	mainTextFontSize,
	windowWidth,
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
			style={styles.wrap}
		>
			{!running && (
				<InstructionsOverlay
					start={() => setRunning(true)}
				/>
			)}
			{running && (
				<>
					<View style={styles.balanceInterface}>
						<View style={styles.resetBalanceButtonWrap}>
							<HidingButton
								title='Обновить баланс'
								onPress={() => dispatch(resetBalance())}
								isHidden={balance > 1000}
							/>
						</View>
						<Text style={styles.balanceText}>
							Баланс: {balance}
						</Text>
					</View>
					<View style={styles.showInstructionsButtonWrap}>
						<HidingButton
							title='Инструкция'
							onPress={() => setRunning(false)}
						/>
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
				</>
			)}
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		padding: gameScreenPadding,
		justifyContent: 'space-between',
	},

	balanceInterface: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	resetBalanceButtonWrap: {
		width: (windowWidth - gameScreenPadding * 2) / 2 - 20,
		//20 = desired gap between balance reset button and balance indicator
	},

	balanceText: {
		color: mainTextColor,
		fontSize: mainTextFontSize,
		alignSelf: 'center',
	},

	showInstructionsButtonWrap: {
		width: (windowWidth - gameScreenPadding * 2) / 2 - 20,
		alignSelf: 'flex-end',
		
	},

	playZone: {
		alignSelf: 'center'
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