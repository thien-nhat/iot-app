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

const SignIn = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	return (
		<View style={[styles.signin, styles.signinLayout]}>
			<View style={[styles.signUpPosition]} />

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
					<View style={[styles.switchSignup, styles.signInParentLayout]}>
						<Image
							style={[styles.switchSignupChild, styles.switchLayout]}
							contentFit='cover'
							source={require('../assets/line-8.png')}
						/>
						<Text style={styles.hocNuCha}>hoặc nếu chưa có tài khoản</Text>
						<Image
							style={[styles.switchSignupItem, styles.switchLayout]}
							contentFit='cover'
							source={require('../assets/line-8.png')}
						/>
					</View>
					<Button
						style={[styles.signUp, styles.signUpPosition]}
						mode='contained'
						labelStyle={styles.signUpBtn}
						onPress={() => navigation.navigate('MnHnhChnhApp')}
						contentStyle={styles.signUpBtn1}
					>
						ĐĂNG NHẬP
					</Button>
					<TextInput
						style={[styles.passwordin, styles.tdninLayout]}
						placeholder='Nhập mật khẩu...'
						secureTextEntry={true}
						placeholderTextColor='#000'
					/>
					<TextInput
						style={[styles.tdnin, styles.tdninLayout]}
						placeholder='Nhập tên đăng nhập...'
						placeholderTextColor='#000'
					/>
					<View style={[styles.logoappPosition]}>
						<Image
							style={[styles.logoappIcon]}
							contentFit='cover'
							source={require('../assets/logoapp1.png')}
						/>
						<Text style={[styles.iotGardenApp, styles.time1Typo]}>
							IOT GARDEN APP
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	signInBtn: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signInBtn1: {
		borderRadius: 30,
		height: 51,
		width: 242,
	},
	signUpBtn: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'Times New Roman',
	},
	signUpBtn1: {
		borderRadius: 30,
		height: 51,
		width: 242,
	},
	signinLayout: {
		width: '100%',
		overflow: 'hidden',
	},
	signUpPosition: {
		left: '50%',
		position: 'absolute',
		transform: [{ translateX: -70 }],
	},
	signInParentLayout: {
		width: 305,
		position: 'absolute',
	},
	switchLayout: {
		width: 59,
		top: 10,
		maxHeight: '100%',
		position: 'absolute',
	},
	tdninLayout: {
		height: 46,
		width: 301,
		fontFamily: FontFamily.timesNewRoman,
		fontStyle: 'italic',
		fontSize: FontSize.size_mini,
		position: 'absolute',
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		borderRadius: Border.br_11xl,
		padding: 15,
	},
	logoappPosition: {
		top: 0,
	},
	time1Typo: {
		fontFamily: FontFamily.poppinsBold,
		textAlign: 'center',
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	statusPosition: {
		height: 37,
		width: 375,
		top: 0,
		left: 0,
		position: 'absolute',
	},
	signIn: {
		top: 482,
		left: '50%',
		transform: [{ translateX: -70 }],
		position: 'absolute',
		overflow: 'hidden',
	},
	switchSignupChild: {
		left: 246,
	},
	hocNuCha: {
		marginLeft: -84.5,
		textAlign: 'center',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		fontStyle: 'italic',
		letterSpacing: 0,
		fontSize: FontSize.size_mini,
		color: Color.colorWhite,
		top: 0,
		left: '50%',
		position: 'absolute',
		transform: [{ translateX: +50 }],
	},
	switchSignupItem: {
		left: 0,
	},
	switchSignup: {
		top: 444,
		height: 17,
		left: 0,
	},
	signUp: {
		top: 372,
		overflow: 'hidden',
	},
	passwordin: {
		top: 287,
		left: '50%',
		transform: [{ translateX: -100 }],
	},
	tdnin: {
		top: 221,
		left: '50%',
		transform: [{ translateX: -100 }],
	},
	logoappIcon: {
		width: 148,
		height: 148,
		left: '50%',
		position: 'absolute',
		transform: [{ translateX: -10 }],
	},
	iotGardenApp: {
		top: 163,
		fontSize: FontSize.size_6xl,
		color: Color.colorDarkturquoise,
		left: '50%',
		transform: [{ translateX: -30 }],
	},

	signInParent: {
		top: 78,
		height: 533,
	},
	mainscreenIcon: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		overflow: 'hidden',
	},
	statusBarChild: {
		backgroundColor: Color.colorGray,
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
	},
	time: {
		top: 3,
		left: 11,
		width: 56,
		height: 23,
		position: 'absolute',
	},
	statusBar: {
		borderTopLeftRadius: Border.br_11xl,
		borderTopRightRadius: Border.br_11xl,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	signin: {
		flex: 1,
		height: 798,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		width: '100%',
	},
});

export default SignIn;
