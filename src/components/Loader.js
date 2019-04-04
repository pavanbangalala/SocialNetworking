import React from 'react';
import { View, ActivityIndicator, Modal, StyleSheet } from 'react-native';

const Loader = ({ loading }) => {
	const { background, container } = styles;
	return (
		<Modal visible={loading} animationType="none" transparent={true}>
			<View style={background}>
				<View style={container}>
					<ActivityIndicator animating={loading} color="#41BC3F" size="large" />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#000000AA',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
	},
	container: {
		width: 80,
		height: 80,
		justifyContent: 'space-around',
		alignItems: 'center',
		display: 'flex',
		borderRadius: 10,
	},
});
export default Loader;
