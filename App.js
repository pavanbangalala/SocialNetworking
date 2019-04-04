/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CreateAppContainer from './src/navigation';
import * as firebase from 'firebase';
var config = {
	apiKey: 'AIzaSyCmk2rEBN-IduVeWq3Es-7V-tqaFwIxIvY',
	authDomain: 'socialnetworking-b9e97.firebaseapp.com',
	databaseURL: 'https://socialnetworking-b9e97.firebaseio.com',
	projectId: 'socialnetworking-b9e97',
	storageBucket: 'socialnetworking-b9e97.appspot.com',
	messagingSenderId: '380859482392',
};

const firebaseInstance = firebase.initializeApp(config);

export default class App extends Component {
	componentDidMount() {}

	render() {
		let AppContainer = CreateAppContainer();
		return (
			<View style={styles.container}>
				<AppContainer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
