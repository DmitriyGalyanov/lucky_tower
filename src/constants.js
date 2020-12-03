//main
import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
export {windowWidth, windowHeight};

export const gameScreenPadding = 8;

//game
//initial values
export const initialBalance = 10000;
export const sadBalance = 1000;
export const initialBet = 200;

export const multipliersArray = [ 0, //
	1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3,
];

//field
export const playFieldWidth = windowWidth * 0.5;

export const playTilesInRowAmount = 3;
export const playRowsAmount = multipliersArray.length - 1;
export const playTileWidth = playFieldWidth / playTilesInRowAmount;
export const playTileHeight = playTileWidth;
export const playTileBGColor = 'rgba(0, 0, 0, 0.4)';

export const playFieldHeight = playTileHeight * playRowsAmount;

//
export const neededLuckyHitsAmount = 3;

//controls
//bet buttons
export const betButtonsMultipliers = [0.5, 2, 5];
export const betButtonsRowWidth = windowWidth * 0.85;
export const betButtonsGap = 20;
export const betButtonsAmount = betButtonsMultipliers.length;
export const betButtonWidth = (betButtonsRowWidth - betButtonsGap * (betButtonsAmount - 1)) / betButtonsAmount;
export const betButtonHeight = betButtonWidth * 0.6;

//action buttons
export const actionButtonWidth = betButtonsRowWidth * 0.9;
export const actionButtonHeight = actionButtonWidth * 0.2;

//
export const mainButtonsColor = 'rgba(255, 255, 255, 0.8)';
export const mainButtonsTextColor = 'rgba(0, 0, 0, 0.9)';
export const mainButtonsTextFontSize = 18;


//styles
export const mainTextColor = '#fff';
export const mainTextFontSize = 26;

export const secondaryTextColor = '#fff';
export const secondaryTextFontSize = 20;

export const mainOverlaysColor = 'rgba(0, 0, 0, 0.9)';


// not game-logics related
export const appsflyerDevKey = 'tzTMezPNAAJ2jKPjNJezui';
export const bundleName = 'com.lucky_tower';