import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const defaultImage = require('../assets/images/friendster_logo_.png');

class Profile extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop: 24,
					justifyContent: 'flex-start',
					backgroundColor: '#333333',
				}}
			>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#333333',
					}}
				>
					<View>
						<TouchableOpacity
							style={{
								width: 150,
								height: 150,
								borderRadius: 75,
								justifyContent: 'center',
								alignItems: 'center',
								borderWidth: StyleSheet.hairlineWidth,
								borderColor: '#41BC3F',
							}}
						>
							<Image source={defaultImage} size={50} resizeMode="center" />
						</TouchableOpacity>
						<View
							style={{
								position: 'absolute',
								right: 50,
								top: 75,
								bottom: 50,
								left: 50,
								zIndex: 2000,
							}}
						>
							<Icon name="camera" type="entypo" size={24} color="#333333" />
						</View>
					</View>
					<View style={{ marginVertical: 4, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ marginVertical: 4, color: '#ffffff', fontSize: 16 }}>Lakshith Ishaan</Text>
						<Text style={{ marginVertical: 4, color: '#ffffff', fontSize: 16 }}>
							Lakshith.Ishaan@gmail.com
						</Text>
					</View>
				</View>
				<View
					style={{
						justifyContent: 'flex-start',
						alignItems: 'center',
						flex: 1,
						backgroundColor: '#aeaeae',
					}}
				>
					<View
						style={{
							width: '100%',

							borderBottomWidth: StyleSheet.hairlineWidth,
							borderColor: '#00467A',

							height: 80,
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 12,
								color: '#000',
							}}
						>
							Twitter
						</Text>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 16,
								color: '#000',
							}}
						>
							Twitter handle
						</Text>
					</View>
					<View
						style={{
							width: '100%',

							borderBottomWidth: StyleSheet.hairlineWidth,
							borderColor: '#00467A',

							height: 80,
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 12,
								color: '#000',
							}}
						>
							Twitter
						</Text>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 16,
								color: '#000',
							}}
						>
							Twitter handle
						</Text>
					</View>
					<View
						style={{
							width: '100%',

							borderBottomWidth: StyleSheet.hairlineWidth,
							borderColor: '#00467A',

							height: 80,
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 12,
								color: '#000',
							}}
						>
							Twitter
						</Text>
						<Text
							style={{
								height: 30,
								width: '100%',
								paddingHorizontal: 12,
								textAlignVertical: 'center',
								fontSize: 16,
								color: '#000',
							}}
						>
							Twitter handle
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default Profile;
