import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { Color, Border, FontSize, FontFamily } from '../GlobalStyles';

const LoadingApp = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	return (
		<View style={[styles.loadingApp, styles.statusBarBg]}>
			<ImageBackground
				style={styles.mainscreenIcon}
				resizeMode='cover'
				source={require('../assets/OIP.jpg')}
				blurRadius={6}
			>
				<View style={styles.button}>
					<Button
						style={[styles.signUp, styles.signPosition]}
						mode='contained'
						labelStyle={styles.signUpBtn}
						onPress={() => navigation.navigate('SignUp2')}
						contentStyle={styles.signUpBtn1}
					>
						ĐĂNG KÍ
					</Button>
					<Image
						style={[styles.buttonChild, styles.buttonChildLayout]}
						contentFit='cover'
						source={require('../assets/line-1.png')}
					/>
					<Button
						style={[styles.signIn, styles.signPosition]}
						mode='contained'
						labelStyle={styles.signInBtn}
						onPress={() => navigation.navigate('SignIn')}
						contentStyle={styles.signInBtn1}
					>
						ĐĂNG NHẬP
					</Button>
				</View>
				<Image
					style={[styles.logoappIcon, styles.buttonChildLayout]}
					contentFit='cover'
					source={require('../assets/logoapp.png')}
				/>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	signUpBtn: {
		color: 'darkblue',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signUpBtn1: {
		borderRadius: 30,
		height: 51,
		width: 242,
	},
	signInBtn: {
		color: 'darkblue',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signInBtn1: {
		borderRadius: 30,
		height: 51,
		width: 242,
	},
	statusBarBg: {
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	statusPosition: {
		height: 37,
		width: 375,
		left: 0,
		top: 0,
		position: 'absolute',
	},
	signPosition: {
		left: 18,
		position: 'absolute',
		overflow: 'hidden',
	},
	buttonChildLayout: {
		maxHeight: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	connectionsIcon: {
		top: 13,
		right: 13,
		width: 68,
		height: 16,
		position: 'absolute',
	},
	time1: {
		marginTop: -5.5,
		top: '50%',
		left: 10,
		fontSize: FontSize.size_mid,
		letterSpacing: 0,
		fontWeight: '700',
		fontFamily: FontFamily.poppinsBold,
		color: Color.colorWhite,
		textAlign: 'center',
		position: 'absolute',
	},
	time: {
		top: 6,
		left: 11,
		width: 56,
		height: 23,
		position: 'absolute',
	},
	statusBar: {
		borderTopLeftRadius: Border.br_11xl,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	signUp: {
		top: 91,
		backgroundColor: 'white',
		// borderColor: 'darkblue',
		borderRadius: 200,
		borderWidth: 2,
	},
	buttonChild: {
		top: 71,
		right: 0,
		bottom: 70,
		maxWidth: '100%',
		left: 0,
		maxHeight: '100%',
	},
	signIn: {
		top: 0,
		left: 18,
		backgroundColor: 'white',
		// borderColor: 'darkblue',
		borderWidth: 2,
		borderRadius: 200,
	},
	button: {
		top: 425,
		// left: 54,
		width: 276,
		height: 142,
		position: 'absolute',
		left: '50%',
		transform: [{ translateX: -138 }],
	},
	logoappIcon: {
		top: 230,
		width: 148,
		height: 148,
		left: '50%',
		position: 'absolute',
		transform: [{ translateX: -74 }],
	},
	mainscreenIcon: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	loadingApp: {
		flex: 1,
		width: '100%',
		height: 798,
	},
});

export default LoadingApp;
