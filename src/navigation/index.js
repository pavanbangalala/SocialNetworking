import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../containers/Home';
import Friends from '../containers/Friends';
import Notifications from '../containers/Notifications';
import Profile from '../containers/Profile';

const tabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				headerTitle: 'Home',
				tabBarIcon: ({ tintColor }) => <Icon name="home" type="fontawesome" color={tintColor} />,
			},
			tabBarOptions: {
				tabBarTitle: 'Home',
			},
		},
		Friends: {
			screen: Friends,
			navigationOptions: {
				headerTitle: 'Friends',
				tabBarIcon: ({ tintColor }) => <Icon name="group" type="fontawesome" color={tintColor} />,
			},
			tabBarOptions: {
				tabBarTitle: 'Friends',
			},
		},
		Notifications: {
			screen: Notifications,
			navigationOptions: {
				headerTitle: 'Notifications',
				tabBarIcon: ({ tintColor }) => <Icon name="bell" type="entypo" color={tintColor} />,
				tabBarLabel: 'Notifications',
			},
			tabBarOptions: {
				activeTintColor: '#f00',
			},
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				headerTitle: 'Profile',
				tabBarIcon: ({ tintColor }) => <Icon name="user" type="entypo" color={tintColor} />,
			},
			tabBarOptions: {
				tabBarTitle: 'Profile',
			},
		},
	},
	{
		initialRouteName: 'Home',
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#aaaaaa',
			activeBackgroundColor: '#0D47A1',
			inactiveBackgroundColor: '#0D47A1',
		},
	}
);

const createRootContainer = () => {
	return createAppContainer(tabNavigator);
};

export default createRootContainer;
