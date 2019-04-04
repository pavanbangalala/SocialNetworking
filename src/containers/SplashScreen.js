import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const logo = require('../assets/images/friendster_logo_.png');

class SplashScreen extends Component {
	componentDidMount() {
		const user = firebase.auth().currentUser;
		console.log('registered user', user);
		const navigation = this.props.navigation;
		setTimeout(navigation => {
			if (false) {
				this.props.navigation.navigate('SignedOut');
			} else {
				this.props.navigation.navigate('SignedIn');
			}
			// let userRef = firebase
			// 	.database()
			// 	.ref()
			// 	.child('users');
			// userRef.on('value', function(snapShot) {
			// 	const user = firebase.auth().currentUser;
			// 	if (user !== null) {
			// 		snapShot.forEach(snapShotItem => {
			// 			if (snapShotItem.val().uid === user.uid) {
			// 				navigation.navigate('SignedIn');
			// 			}
			// 		});
			// 	} else {
			// 		navigation.navigate('SignedOut');
			// 	}
			// });
		}, 3000);
		// firebase.auth().onAuthStateChanged(user => {
		// 	console.log('user', 'calling on auth state changed');
		// 	setTimeout(() => {
		// 		if (user) {
		// 			this.props.navigation.navigate('SignedIn');
		// 		} else {
		// 			this.props.navigation.navigate('SignedOut');
		// 		}
		// 	}, 2000);
		// });
	}

	render() {
		const { container, textStyle } = Styles;
		return (
			<LinearGradient colors={['#ffffff', '#ffffff', '#aeaeae']} style={container}>
				<Text style={textStyle}>Friendster</Text>
				<Image source={logo} size={100} resizeMode="contain" />
			</LinearGradient>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 40,
		fontWeight: '700',
		color: '#41BC3F',
		marginBottom: 12,
	},
});

export default SplashScreen;
