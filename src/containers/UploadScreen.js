import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import Button from '../components/Button';

class UploadScreen extends Component {
	static navigationOptions = {
		title: 'Posts',
		headerTitle: 'Posts',
		headerStyle: {
			backgroundColor: '#333333',
		},
		headerTintColor: '#41BC3F',
		headerTitleStyle: {
			color: '#41BC3F',
			fontSize: 20,
			fontWeight: '700',
		},
	};

	render() {
		const { container } = styles;
		return (
			<View style={container}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === 'ios' ? 'padding' : null}
					keyboardVerticalOffset={60}
				>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text>Upload Screen</Text>
					</View>

					<View
						style={{
							backgroundColor: '#333333',
							height: 50,
							paddingTop: 4,
							paddingBottom: 8,
							paddingHorizontal: 8,
						}}
					>
						<TextInput
							placeholder="Enter some text"
							style={{
								borderRadius: 2,
								flex: 1,
								backgroundColor: '#ffffff',
								paddingHorizontal: 8,
								fontSize: 18,
								color: '#333333',
							}}
						/>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default UploadScreen;
