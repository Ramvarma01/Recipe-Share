/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/App1';
// import App from './app2';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
