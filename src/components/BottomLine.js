import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomLine = ({ text, color, onPress }) => {
	const { container, textStyle } = styles;
	return (
		<TouchableOpacity style={container} onPress={onPress}>
			<Text style={[textStyle, { color: color }]}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
	},
	textStyle: {
		fontSize: 12,
		fontWeight: '500',
	},
});
export default BottomLine;
