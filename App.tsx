const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import LchSToLchTrn from './screens/LchSToLchTrn';
import ChiTit1BTrnTt from './screens/ChiTit1BTrnTt';
import MnHnhChnhApp from './screens/MnHnhChnhApp';
import LoadingApp from './screens/LoadingApp';
import SignIn from './screens/SignIn';
import ThemLichTron from './screens/ThemLichTron';
import Setting from './screens/Setting';
import ChiTit1BTrnBt from './screens/ChiTit1BTrnBt';
import SignUp from './components/SignUp';
import SignUp1 from './components/SignUp1';
import SignUp2 from './screens/SignUp2';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { LogBox } from 'react-native';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
// import { Client, Message } from 'react-native-paho-mqtt';



// // Set up an in-memory alternative to global localStorage
// const myStorage = {
// 	setItem: (key, item) => {
// 		myStorage[key] = item;
// 	},
// 	getItem: (key) => myStorage[key],
// 	removeItem: (key) => {
// 		delete myStorage[key];
// 	},
// };

// // Create a client instance
// const client = new Client({
// 	uri: 'wss://io.adafruit.com:443/mqtt/',
// 	clientId: 'nnthien',
// 	storage: myStorage,
// });

// // Set event handlers
// client.on('connectionLost', (responseObject) => {
// 	if (responseObject.errorCode !== 0) {
// 		console.log(responseObject.errorMessage);
// 	}
// });
// client.on('messageReceived', (message) => {
// 	console.log('Message arrived: ' + message.payloadString);
// });
// const ADAFRUIT_AIO_USERNAME = 'nnthien';
// const ADAFRUIT_AIO_KEY = 'aio_eajM32jEChGJOMatPsniFkiZurK2';
// // Connect the client
// client
// 	.connect({
// 		useSSL: true,
// 		userName: ADAFRUIT_AIO_USERNAME,
// 		password: ADAFRUIT_AIO_KEY,
// 	})
// 	.then(() => {
// 		console.log('Connected to Adafruit IO');
// 		return client.subscribe('nnthien/feeds/Temperature');
// 	})
// 	.then(() => {
// 		const message = new Message('21');
// 		message.destinationName = 'nnthien/feeds/Temperature';
// 		client.send(message);
// 	})
// 	.catch((responseObject) => {
// 		if (responseObject.errorCode !== 0) {
// 			console.log('onConnectionLost:' + responseObject);
// 		}
// 	});

// init({
// 	size: 10000,
// 	storageBackend: AsyncStorage,
// 	defaultExpires: 1000 * 3600 * 24,
// 	enableCache: true,
// 	sync: {},
// });

// function onConnect() {
// 	console.log('onConnect');
// }

// function onConnectionLost(responseObject) {
//   if (responseObject.errorCode !== 0) {
//     console.log('onConnectionLost:' + responseObject.errorMessage);
//   }
// }

// function onMessageArrived(message) {
//   console.log('onMessageArrived:' + message.payloadString);
// }

// const client = new Paho.MQTT.Client('io.adafruit.com', 1883, 'nnthien');
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
// client.connect({ onSuccess: onConnect, useSSL: true });

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	View,
	Text,
	Pressable,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

LogBox.ignoreAllLogs(true);

const App = () => {
	const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

	const [fontsLoaded, error] = useFonts({
		'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
		'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
	});

	function MaterialIcon({ name, style }) {
		const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
		return (
			<MIcon name={name} size={height} color={tintColor} style={iconStyle} />
		);
	}

	const IconProvider = (name) => ({
		toReactElement: (props) => MaterialIcon({ name, ...props }),
	});

	function createIconsMap() {
		return new Proxy(
			{},
			{
				get(target, name) {
					return IconProvider(name);
				},
			}
		);
	}
	const MaterialIconsPack = {
		name: 'material',
		icons: createIconsMap(),
	};

	if (!fontsLoaded && !error) {
		return null;
	}

	return (
		<>
			<IconRegistry icons={[MaterialIconsPack]} />
			<ApplicationProvider {...eva} theme={eva.light}>
				<NavigationContainer>
					{hideSplashScreen ? (
						<Stack.Navigator
							initialRouteName='LoadingApp'
							screenOptions={{ headerShown: false }}
						>
							<Stack.Screen
								name='LchSToLchTrn'
								component={LchSToLchTrn}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='ChiTit1BTrnTt'
								component={ChiTit1BTrnTt}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='MnHnhChnhApp'
								component={MnHnhChnhApp}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='LoadingApp'
								component={LoadingApp}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='SignIn'
								component={SignIn}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='ThemLichTron'
								component={ThemLichTron}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Setting'
								component={Setting}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='ChiTit1BTrnBt'
								component={ChiTit1BTrnBt}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='SignUp2'
								component={SignUp2}
								options={{ headerShown: false }}
							/>
						</Stack.Navigator>
					) : null}
				</NavigationContainer>
			</ApplicationProvider>
		</>
	);
};
export default App;
