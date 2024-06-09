import * as React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ImageBackground,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { FontFamily, FontSize, Color, Border } from '../GlobalStyles';

const SignUp2 = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	return (
		<View style={[styles.signin, styles.signinLayout]}>
			<ImageBackground
				style={styles.mainscreenIcon}
				resizeMode='cover'
				source={require('../assets/OIP.jpg')}
				blurRadius={6}
			>
				<View style={[styles.signInParent, styles.signInParentLayout]}>
					<Button
						style={styles.signIn}
						mode='contained'
						labelStyle={styles.signInBtn}
						onPress={() => navigation.navigate('SignUp2')}
						contentStyle={styles.signInBtn1}
					>
						ĐĂNG KÍ
					</Button>
					<TextInput
						style={[styles.passworddk, styles.tdndkTypo]}
						placeholder='Nhập mật khẩu...'
						secureTextEntry={true}
						placeholderTextColor='#000'
					/>
					<TextInput
						style={[styles.tdndk, styles.tdndkTypo]}
						placeholder='Nhập tên đăng nhập...'
						placeholderTextColor='#000'
					/>
					<TextInput
						style={[styles.emaildk, styles.tdndkTypo]}
						placeholder='Nhập email đăng kí...'
						placeholderTextColor='#000'
					/>
					<View style={[styles.logoapp]}>
						<Image
							style={styles.logoappIcon}
							contentFit='cover'
							source={require('../assets/logoapp2.png')}
						/>
						<Text style={[styles.iotGardenApp, styles.statusBarLayout]}>
							IOT GARDEN APP
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	signinLayout: {
		width: '100%',
		overflow: 'hidden',
	},
	signin: {
		flex: 1,
		height: 798,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		width: '100%',
	},
	signInParentLayout: {
		width: 305,
		position: 'absolute',
	},
	signInParent: {
		top: 78,
		height: 533,
	},
	signInBtn: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signInBtn1: {
		borderRadius: 30,
		height: 50,
	},
	signUpBtn: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signUpBtn1: {
		borderRadius: 30,
		height: 50,
	},
	signupLayout: {
		overflow: 'hidden',
		width: '100%',
	},
	framePosition: {
		width: 375,
		left: 0,
		top: 0,
		overflow: 'hidden',
	},
	signPosition: {
		left: 33,
		right: 27,
		position: 'absolute',
		overflow: 'hidden',
	},
	switchLayout: {
		maxHeight: '100%',
		top: 10,
		maxWidth: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	hocNuFlexBox: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	},
	tdndkTypo: {
		height: 45,
		fontFamily: FontFamily.timesNewRoman,
		fontStyle: 'italic',
		fontSize: FontSize.size_mini,
		position: 'absolute',
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		borderRadius: Border.br_11xl,
	},

	statusBarLayout: {
		height: 37,
		position: 'absolute',
	},
	time1Typo: {
		fontFamily: FontFamily.poppinsBold,
		textAlign: 'center',
		fontWeight: '700',
		letterSpacing: 0,
	},
	homeIndicator: {
		marginLeft: -67.5,
		bottom: 11,
		left: '50%',
		borderRadius: Border.br_81xl,
		backgroundColor: Color.colorBlack,
		width: 134,
		height: 5,
		transform: [
			{
				rotate: '0.1deg',
			},
		],
		position: 'absolute',
	},
	signIn: {
		top: 538,
    left: '50%',
    transform: [{ translateX: -100 }],
	},
	switchSigninChild: {
		left: 238,
		right: 0,
	},
	hocNu: {
		left: 76,
		width: 149,
		textAlign: 'center',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		fontStyle: 'italic',
		letterSpacing: 0,
		fontSize: FontSize.size_mini,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		color: Color.colorWhite,
		height: 17,
		top: 0,
		position: 'absolute',
	},
	switchSigninItem: {
		right: 238,
		left: 0,
		top: 10,
	},
	switchSignin: {
		top: 500,
		left: 4,
		width: 297,
		height: 17,
		position: 'absolute',
	},
	signUp: {
		top: 429,
	},
	passworddk: {
		top: 368,
		height: 45,
		width: 305,
		left: '50%',
		transform: [{ translateX: -100 }],
    padding: 15,
	},
	tdndk: {
		top: 300,
		height: 45,
		width: 305,
		left: '50%',
		transform: [{ translateX: -100 }],
    padding: 15,
	},
	emaildk: {
		top: 236,
		width: 305,
		left: '50%',
		transform: [{ translateX: -100 }],
    height: 45,
    padding: 15,
	},
	logoappIcon: {
		height: 149,
		width: 149,
		position: 'absolute',
		overflow: 'hidden',
		left: '50%',
		transform: [{ translateX: -10 }],
	},
	iotGardenApp: {
		top: 170,
		fontSize: FontSize.size_6xl,
		color: Color.colorDarkturquoise,
		fontFamily: FontFamily.poppinsBold,
		textAlign: 'center',
		fontWeight: '700',
		letterSpacing: 0,
		width: 202,
		left: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		transform: [{ translateX: -40 }],
	},
	logoapp: {
		top: 0,
		left: '50%',
		position: 'absolute',
	},
	content: {
		top: 78,
		left: 37,
		width: 302,
		height: 588,
		position: 'absolute',
	},
	mainscreenIcon: {
		height: '100%',
		width: '100%',
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
		color: Color.colorWhite,
		fontFamily: FontFamily.poppinsBold,
		position: 'absolute',
	},
	time: {
		top: 3,
		left: 11,
		width: 56,
		height: 23,
		position: 'absolute',
	},
	statusBar: {
		width: 375,
		left: 0,
		top: 0,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	frame: {
		height: 767,
		position: 'absolute',
	},
	signup: {
		flex: 1,
		height: 798,
		backgroundColor: Color.colorWhite,
		borderRadius: Border.br_11xl,
		overflow: 'hidden',
		width: '100%',
	},
});

export default SignUp2;
