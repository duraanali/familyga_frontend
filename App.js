import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import { enableScreens } from 'react-native-screens';
import Main from '@navigation/Main';
import React from 'react';
enableScreens();
LogBox.ignoreAllLogs()

export default Main;
