import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import InputField from '../components/InputField';
import BottomLine from '../components/BottomLine';
import Button from '../components/Button';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const logo = require('../assets/images/friendster_logo_.png');

class LoginScreen extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			loading: false,
		};
	}
	navigateToRegistrationScreen = () => {
		console.log('LoginScreen', this.props.navigation);
		this.props.navigation.navigate('RegistrationScreen');
	};

	validateUser = () => {
		if (this.state.email.length === 0) {
			Alert.alert('Invalid email address');
			return false;
		}

		if (this.state.password.length === 0) {
			Alert.alert('Invalid password');
			return false;
		}

		return true;
	};

	loginUser = () => {
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => this.setState({ loading: false }))
			.catch(error => {
				this.setState({ loading: false });
				Alert.alert('firebase error', error);
			});
	};

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Image source={logo} size={50} resizeMode="center" />
				<InputField placeholder="john.doe@abc.com" />
				<InputField />
				<Button text="Sign In" onPress={this.loginUser} />
				<BottomLine text="New User? Sign Up" onPress={this.navigateToRegistrationScreen} color="#41BC3F" />
			</View>
		);
	}
}

export default LoginScreen;
