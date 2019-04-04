import React from 'react';
import {
	createBottomTabNavigator,
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator,
} from 'react-navigation';

import { Icon } from 'react-native-elements';
import Home from '../containers/Home';
import Friends from '../containers/Friends';
import Notifications from '../containers/Notifications';
import Profile from '../containers/Profile';
import SplashScreen from '../containers/SplashScreen';
import LoginScreen from '../containers/LoginScreen';
import RegistrationScreen from '../containers/RegistrationScreen';
import UploadScreen from '../containers/UploadScreen';

const MainTabNavigator = createBottomTabNavigator(
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
				tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" type="ionicon" color={tintColor} />,
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
			activeTintColor: '#f5f5f5',
			inactiveTintColor: '#41BC3F',
			activeBackgroundColor: '#333333',
			inactiveBackgroundColor: '#333333',
		},
	}
);
const signedInStack = createStackNavigator(
	{
		MainTabNavigator: {
			screen: MainTabNavigator,
		},
		UploadScreen: {
			screen: UploadScreen,
		},
	},
	{
		initialRouteName: 'MainTabNavigator',
	}
);

const signedOutStack = createStackNavigator(
	{
		LoginScreen: {
			screen: LoginScreen,
			navigationOptions: {
				header: null,
			},
		},
		RegistrationScreen: {
			screen: RegistrationScreen,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: 'LoginScreen',
	}
);

const RootNavigator = createSwitchNavigator(
	{
		SplashScreen: {
			screen: SplashScreen,
		},

		SignedIn: {
			screen: signedInStack,
		},
		SignedOut: {
			screen: signedOutStack,
		},
	},
	{
		initialRouteName: 'SplashScreen',
	}
);

const createRootContainer = () => {
	return createAppContainer(RootNavigator);
};

export default createRootContainer;
