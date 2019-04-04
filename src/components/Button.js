import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';

const Button = ({ text, onPress }) => {
	const { container, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={container}>
				<Text style={textStyle}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#333333',
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 4,
	},
	textStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#41BC3F',
		marginHorizontal: 24,
	},
});

export default Button;
