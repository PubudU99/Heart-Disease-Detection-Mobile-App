import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import App from '../App';
import FirstPage from '../screens/FirstPage';


const screens = {
    App: {
        screen: App
    },
    FirstPage: {
        screen: FirstPage
    },
}
const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);