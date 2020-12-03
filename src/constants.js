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

//field
export const playFieldWidth = windowWidth * 0.85;

export const playTilesInRowAmount = 3;
export const playRowsAmount = 3;
export const playTilesAmount = playTilesInRowAmount * playRowsAmount;
export const playTileWidth = playFieldWidth / playTilesInRowAmount;
export const playTileHeight = playTileWidth;
export const playTileBGColor = 'rgba(0, 0, 0, 0.4)';

export const playFieldHeight = playTileHeight * playRowsAmount;

//
export const winningItemProbability = 25;
export const maxLossItemsAmount = 6;
export const neededLuckyHitsAmount = 3;

//controls
//bet buttons
export const betButtonsMultipliers = [0.5, 2, 5];
export const betButtonsRowWidth = playFieldWidth;
export const betButtonsGap = 20;
export const betButtonsAmount = betButtonsMultipliers.length;
export const betButtonWidth = (betButtonsRowWidth - betButtonsGap * (betButtonsAmount - 1)) / betButtonsAmount;
export const betButtonHeight = betButtonWidth * 0.6;

//play button
export const playButtonWidth = playFieldWidth;
export const playButtonHeight = playButtonWidth * 0.25;

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