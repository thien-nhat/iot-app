import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Pressable,
	Text,
	Switch,
} from 'react-native';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { Border, FontSize, FontFamily, Color } from '../GlobalStyles';
import { transform } from 'typescript';

const MnHnhChnhApp = () => {
	const [switchSchedulerSwitchValueState, setSwitchSchedulerSwitchValueState] =
		useState(false);
	const [
		switchScheduler1SwitchValueState,
		setSwitchScheduler1SwitchValueState,
	] = useState(false);
	const [dSwitchSwitchValueState, setDSwitchSwitchValueState] = useState(false);
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	return (
		<View style={styles.mnHnhChnhApp}>
			<ScrollView
				style={[styles.lchTrn, styles.lchTrnPosition]}
				showsVerticalScrollIndicator={true}
				showsHorizontalScrollIndicator={true}
				contentContainerStyle={styles.lchTrnScrollViewContent}
			>
				<View style={styles.toolscheduler}>
					<View style={styles.headerScheduler}>
						<Pressable
							style={styles.thmLchTrn}
							onPress={() => navigation.navigate('ThemLichTron')}
						>
							<Image
								style={[styles.icon, styles.iconLayout]}
								contentFit='cover'
								source={require('../assets/thm-lch-trn.png')}
							/>
						</Pressable>
						<Text style={styles.lchTrnPhn}>LỊCH TRỘN PHÂN</Text>
						<Pressable
							style={[styles.lchTo, styles.iconPosition]}
							onPress={() => navigation.navigate('LchSToLchTrn')}
						>
							<Image
								style={styles.icon1}
								contentFit='cover'
								source={require('../assets/lch--to.png')}
							/>
						</Pressable>
					</View>
				</View>
				<Pressable
					style={styles.lchShadowBox}
					onPress={() => navigation.navigate('ChiTit1BTrnTt')}
				>
					<Text style={[styles.tnLchTrnContainer, styles.trnTypo]}>
						<Text style={styles.tnLchTrn}>{`Tên lịch trộn:  `}</Text>
						<Text style={styles.text}>{` `}</Text>
						<Text style={styles.tnLchTrn}>{` `}</Text>
					</Text>
					<Text
						style={[styles.thiGianTrn, styles.trnTypo]}
					>{`Thời gian trộn: `}</Text>
					<Image
						style={styles.lchTrn1Child}
						contentFit='cover'
						source={require('../assets/line-2.png')}
					/>
					<Switch
						style={styles.switchScheduler}
						value={switchSchedulerSwitchValueState}
						onValueChange={setSwitchSchedulerSwitchValueState}
						thumbColor='#fff'
					/>
					<Text style={[styles.bnPhn1, styles.text2Typo]}>Bón phân 1</Text>
					<Text style={[styles.text2, styles.text2Typo]}>
						12:22, 08/06/2024
					</Text>
				</Pressable>
				<Pressable
					style={styles.lchShadowBox}
					onPress={() => navigation.navigate('ChiTit1BTrnTt')}
				>
					<Text style={[styles.tnLchTrnContainer, styles.trnTypo]}>
						<Text style={styles.tnLchTrn}>{`Tên lịch trộn:  `}</Text>
						<Text style={styles.text}>{` `}</Text>
						<Text style={styles.tnLchTrn}>{` `}</Text>
					</Text>
					<Text
						style={[styles.thiGianTrn, styles.trnTypo]}
					>{`Thời gian trộn: `}</Text>
					<Image
						style={styles.lchTrn1Child}
						contentFit='cover'
						source={require('../assets/line-2.png')}
					/>
					<Switch
						style={styles.switchScheduler}
						value={switchScheduler1SwitchValueState}
						onValueChange={setSwitchScheduler1SwitchValueState}
						thumbColor='#fff'
					/>
					<Text style={[styles.bnPhn11, styles.phnTypo]}>Bón phân 1</Text>
					<Text style={[styles.text5, styles.phnTypo]}>12:22, 08/06/2024</Text>
				</Pressable>
				<Pressable
					style={styles.lchShadowBox}
					onPress={() => navigation.navigate('ChiTit1BTrnBt')}
				>
					<Text style={[styles.tnLchTrnContainer, styles.trnTypo]}>
						<Text style={styles.tnLchTrn}>{`Tên lịch trộn:  `}</Text>
						<Text style={styles.text}>{` `}</Text>
						<Text style={styles.tnLchTrn}>{` `}</Text>
					</Text>
					<Text
						style={[styles.thiGianTrn, styles.trnTypo]}
					>{`Thời gian trộn: `}</Text>
					<Image
						style={styles.lchTrn1Child}
						contentFit='cover'
						source={require('../assets/line-2.png')}
					/>
					<Text style={[styles.bnPhn12, styles.phnTypo]}>Bón phân 1</Text>
					<Text style={[styles.text5, styles.phnTypo]}>12:22, 08/06/2024</Text>
					<Switch
						style={styles.switchScheduler}
						value={dSwitchSwitchValueState}
						onValueChange={setDSwitchSwitchValueState}
						thumbColor='#fff'
					/>
				</Pressable>
			</ScrollView>
			<View style={[styles.showSensor, styles.realtimeBg]}>
				<View style={[styles.showHumidity, styles.showShadowBox]}>
					<View style={styles.humidity}>
						<Text style={[styles.text9, styles.cTypo]}> 50%</Text>
						<Image
							style={[styles.vuesaxbulkdropIcon, styles.iconPosition]}
							contentFit='cover'
							source={require('../assets/vuesaxbulkdrop.png')}
						/>
					</View>
				</View>
				<View style={[styles.showTempe, styles.temperaPosition]}>
					<View style={[styles.tempera, styles.temperaPosition]}>
						<Text style={[styles.c, styles.cTypo]}>35ºC</Text>
						<Image
							style={[styles.cloudIcon, styles.iconPosition]}
							contentFit='cover'
							source={require('../assets/cloud.png')}
						/>
					</View>
				</View>
			</View>
			<View style={[styles.realtime, styles.realtimeBg]}>
				<Text style={[styles.time, styles.cTypo]}>22:50, 08/06/2024</Text>
				<View style={[styles.tempeOver, styles.tempeOverPosition]}>
					<Image
						style={[styles.cloudIcon1, styles.lchTrnPosition1]}
						contentFit='cover'
						source={require('../assets/cloud1.png')}
					/>
					<Text style={[styles.temperature, styles.time1Position]}>35ºC</Text>
				</View>
			</View>
			<View style={styles.headerbar}>
				<Text style={[styles.iotGardenApp, styles.time2Typo]}>
					IOT GARDEN APP
				</Text>
				<Image
					style={styles.logoIcon}
					contentFit='cover'
					source={require('../assets/logo.png')}
				/>
				<Pressable
					style={styles.setting2}
					onPress={() => navigation.navigate('Setting')}
				>
					<Image
						style={styles.icon2}
						contentFit='cover'
						source={require('../assets/setting2.png')}
					/>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	lchTrnScrollViewContent: {
		flexDirection: 'column',
		paddingHorizontal: 20,
		paddingVertical: 18,
		alignItems: 'flex-end',
		justifyContent: 'flex-start',

	},
	lchTrnPosition: {
		borderTopRightRadius: Border.br_11xl,
		borderTopLeftRadius: Border.br_11xl,
		overflow: 'hidden',
	},
	iconLayout: {
		maxWidth: '100%',
		maxHeight: '100%',
		overflow: 'hidden',
	},
	iconPosition: {
		top: 0,
		left: 0,
		position: 'absolute',
	},
	trnTypo: {
		textAlign: 'left',
		left: 19,
		fontSize: FontSize.size_mid,
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	text2Typo: {
		left: 132,
		color: Color.colorRed,
		textAlign: 'left',
		fontSize: FontSize.size_mid,
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	phnTypo: {
		left: 131,
		color: Color.colorRed,
		textAlign: 'left',
		fontSize: FontSize.size_mid,
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	realtimeBg: {
		backgroundColor: Color.colorCornflowerblue,
		position: 'absolute',
		overflow: 'hidden',
	},
	showShadowBox: {
		width: 113,
		bottom: 16,
		top: 15,
		borderRadius: Border.br_3xs,
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	cTypo: {
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: '500',
		textAlign: 'center',
		letterSpacing: 0,
		fontSize: FontSize.size_xl,
	},
	temperaPosition: {
		left: 12,
		position: 'absolute',
	},
	tempeOverPosition: {
		top: 12,
		position: 'absolute',
		overflow: 'hidden',
	},
	lchTrnPosition1: {
		left: 0,
		position: 'absolute',
	},
	time1Position: {
		top: 6,
		position: 'absolute',
	},
	time2Typo: {
		fontFamily: FontFamily.poppinsBold,
		textAlign: 'center',
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	statusPosition: {
		height: 37,
		top: 0,
		width: 375,
		left: 0,
		position: 'absolute',
	},
	icon: {
		maxHeight: '100%',
		height: '100%',
		width: '100%',
	},
	thmLchTrn: {
		left: '90.38%',
		top: '0%',
		right: '0%',
		bottom: '0%',
		width: '9.62%',
		height: '100%',
		position: 'absolute',
	},
	lchTrnPhn: {
		left: 60,
		textAlign: 'center',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		color: Color.colorBlack,
		fontSize: FontSize.size_xl,
		top: 3,
		position: 'absolute',
	},
	icon1: {
		height: '100%',
		width: '100%',
	},
	lchTo: {
		width: 28,
		height: 28,
	},
	headerScheduler: {
		height: '60.87%',
		width: '87.13%',
		top: '19.57%',
		right: '6.59%',
		bottom: '19.57%',
		left: '6.29%',
		position: 'absolute',
	},
	toolscheduler: {
		shadowColor: 'rgba(122, 110, 110, 0.5)',
		shadowRadius: 6,
		elevation: 6,
		borderRadius: Border.br_mini,
		width: 334,
		height: 46,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	tnLchTrn: {
		color: Color.colorBlack,
	},
	text: {
		color: Color.colorRed,
	},
	tnLchTrnContainer: {
		top: 9,
	},
	thiGianTrn: {
		top: 45,
		color: Color.colorBlack,
	},
	lchTrn1Child: {
		top: 38,
		width: 241,
		height: 0,
		left: 11,
		position: 'absolute',
	},
	switchScheduler: {
		top: 27,
		left: 270,
		width: 50,
		height: 23,
		position: 'absolute',
	},
	bnPhn1: {
		top: 10,
	},
	text2: {
		top: 45,
	},
	lchShadowBox: {
		marginTop: 29,
		height: 76,
		width: 333,
		borderRadius: Border.br_xl,
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	bnPhn11: {
		top: 9,
	},
	text5: {
		top: 45,
	},
	bnPhn12: {
		top: 11,
	},
	lchTrn: {
		top: 298,
		backgroundColor: Color.colorLimegreen_100,
		// left: 0,
		position: 'absolute',
		flex: 1,
		borderTopRightRadius: Border.br_11xl,
		borderTopLeftRadius: Border.br_11xl,
    left: '50%',
    transform: [{translateX: -187.5}],
	},
	text9: {
		top: 5,
		left: 32,
		color: Color.colorBlack,
		position: 'absolute',
	},
	vuesaxbulkdropIcon: {
		right: 46,
		bottom: 3,
		maxHeight: '100%',
		maxWidth: '100%',
		overflow: 'hidden',
	},
	humidity: {
		right: 17,
		bottom: 15,
		left: 18,
		top: 18,
		position: 'absolute',
	},
	showHumidity: {
		right: 10,
		position: 'absolute',
	},
	c: {
		top: 2,
		left: 41,
		width: 49,
		color: Color.colorBlack,
		position: 'absolute',
	},
	cloudIcon: {
		right: 58,
		bottom: 0,
		maxHeight: '100%',
		maxWidth: '100%',
		overflow: 'hidden',
	},
	tempera: {
		right: 11,
		bottom: 18,
		top: 18,
	},
	showTempe: {
		width: 113,
		bottom: 16,
		top: 15,
		borderRadius: Border.br_3xs,
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	showSensor: {
		top: 184,
		right: 28,
		left: 26,
		height: 99,
		borderRadius: Border.br_3xs,
		backgroundColor: Color.colorCornflowerblue,
	},
	time: {
		top: 17,
		left: 17,
		color: Color.colorWhite,
		position: 'absolute',
	},
	cloudIcon1: {
		top: 4,
		bottom: 4,
		width: 32,
		maxHeight: '100%',
	},
	temperature: {
		left: 39,
		color: Color.colorWhite,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: '500',
		textAlign: 'center',
		letterSpacing: 0,
		fontSize: FontSize.size_xl,
	},
	tempeOver: {
		left: 250,
		width: 88,
		height: 40,
	},
	realtime: {
		top: 106,
		height: 64,
		right: 13,
		left: 11,
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_11xl,
	},
	iotGardenApp: {
		left: 77,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 161,
		top: 13,
		height: 28,
		color: Color.colorBlack,
		fontFamily: FontFamily.poppinsBold,
		fontSize: FontSize.size_xl,
	},
	logoIcon: {
		width: 60,
		height: 45,
		top: 3,
		left: 0,
		position: 'absolute',
		overflow: 'hidden',
	},
	icon2: {
		maxHeight: '100%',
		width: '100%',
	},
	setting2: {
		right: 5,
		bottom: 12,
		width: 38,
		top: 10,
		position: 'absolute',
	},
	headerbar: {
		top: 30,
		left: 13,
		borderStyle: 'solid',
		borderColor: Color.colorBlack,
		borderTopWidth: 2,
		borderBottomWidth: 2,
		height: 58,
		right: 13,
	},
	mainscreen: {
		backgroundColor: 'blue',
		top: 37,
		height: 730,
		width: 375,
		left: 0,
		position: 'absolute',
		overflow: 'hidden',
	},
	statusBarChild: {
		backgroundColor: Color.colorGray,
	},
	connectionsIcon: {
		width: 68,
		height: 16,
		top: 13,
		right: 13,
		position: 'absolute',
	},
	time2: {
		marginTop: -7.5,
		top: '50%',
		color: Color.colorWhite,
		left: 11,
		fontSize: FontSize.size_mid,
		fontFamily: FontFamily.poppinsBold,
	},
	time1: {
		width: 56,
		height: 23,
		left: 11,
	},
	statusBar: {
		borderTopRightRadius: Border.br_11xl,
		borderTopLeftRadius: Border.br_11xl,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		height: 37,
	},
	mnHnhChnhApp: {
		height: '100%',
		overflow: 'hidden',
		width: '100%',
		flex: 1,
		backgroundColor: Color.colorWhite,
	},
});

export default MnHnhChnhApp;
