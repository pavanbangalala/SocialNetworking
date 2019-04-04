import React, { Component } from 'react';
import { View, Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import InputField from '../components/InputField';
import BottomLine from '../components/BottomLine';
import Button from '../components/Button';
import Loader from '../components/Loader';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { ThemeConsumer } from 'react-native-elements';

const logo = require('../assets/images/friendster_logo_.png');

class RegistrationScreen extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			name: '',
			password: '',
			loading: false,
		};
		this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
	}

	navigateToLoginScreen = () => {
		this.props.navigation.navigate('LoginScreen');
	};

	validateUser = () => {
		if (this.state.name.length < 3) {
			Alert.alert('Invalid User Name');
			return false;
		}
		if (this.state.email.length < 4) {
			Alert.alert('Invalid email address');
			return false;
		}

		if (this.state.password.length < 3) {
			Alert.alert('Invalid password');
			return false;
		}

		return true;
	};

	registerNewUser = () => {
		console.log('user', this.state);
		const { email, password, name } = this.state;
		const navigation = this.props.navigation;
		this.setState({ loading: true }, () => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(response => {
					const user = response.user;
					const rootRef = firebase.database().ref();
					const userRef = rootRef.child('users');
					userRef.push({
						uid: user.uid,
						name: name,
						password: password,
					});
					this.setState({ loading: false }, () => this.navigateToLoginScreen());
					console.log('user response', response);
				})
				.catch(error => {
					this.setState({ loading: false }, () => Alert.alert(error));
				});
		});
	};

	updateName = value => {
		this.setState({ name: value });
	};

	updateEmail = value => {
		this.setState({ email: value });
	};

	updatePassword = value => {
		this.setState({ password: value });
	};

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{this.state.loading && <Loader visible={this.state.loading} />}
				<KeyboardAvoidingView
					behavior={Platform.OS == 'ios' ? 'padding' : null}
					style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
				>
					<Image source={logo} size={50} resizeMode="center" />
					<InputField placeholder="john doe" onChangeText={this.updateName} value={this.state.name} />
					<InputField
						placeholder="john.doe@abc.com"
						onChangeText={this.updateEmail}
						value={this.state.email}
					/>
					<InputField onChangeText={this.updatePassword} value={this.state.password} />
					<Button text="Sign Up" onPress={this.registerNewUser} />
					<BottomLine text="Existing User? Sign in" onPress={this.navigateToLoginScreen} color="#41BC3F" />
				</KeyboardAvoidingView>
			</View>
		);
	}
}

export default RegistrationScreen;
