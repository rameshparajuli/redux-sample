/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ReduxSample from './src/IncrementDecrement';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxSample);
