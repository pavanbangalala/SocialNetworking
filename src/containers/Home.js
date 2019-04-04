import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home Screen</Text>
				<View
					style={{
						position: 'absolute',
						bottom: 50,
						right: 50,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('UploadScreen')}
						style={{
							width: 50,
							height: 50,
							borderRadius: 25,
							borderColor: '#41BC3F',
							borderWidth: StyleSheet.hairlineWidth,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#333333',
						}}
					>
						<Icon name="edit" type="entypo" size={24} color="#41BC3F" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Home;
