import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, onChangeText, value }) => {
	const { container, inputStyle } = styles;
	return (
		<View style={container}>
			<TextInput placeholder={placeholder} style={inputStyle} onChangeText={onChangeText} value={value} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		width: '80%',
		borderRadius: 4,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#41BC3F',
		marginBottom: 12,
	},
	inputStyle: {
		fontSize: 16,
		color: '#333333',
	},
});

export default InputField;
