import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';

import {WebView} from 'react-native-webview';


WebViewScreen.propTypes = {
	url: PropTypes.string.isRequired,
};
/**
 * Creates a Full-Screen-sized WebView using passed url
 * @param {{url: string}} props
 */
export default function WebViewScreen({url}) {
	console.log('WebViewScreen URL:', url);

	return (
		<View style={{flex: 1}}>
			<WebView
				source={{
					uri: url
				}}
			/>
		</View>
	)
}