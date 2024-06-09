import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Image } from 'expo-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles';

const ChiTit1BTrnTt = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

	return (
		<View style={[styles.chiTit1BTrnTt, styles.statusBarBg]}>
			<View style={styles.lchTrn}>
				<Pressable style={[styles.buttonOn, styles.buttonOnShadowBox]}>
					<Text style={[styles.btLchTrn, styles.trnTypo]}>BẬT LỊCH TRỘN</Text>
				</Pressable>
				<View style={styles.detail}>
					<View style={styles.name}>
						<View style={[styles.tnBTrn, styles.tnBTrnPosition]}>
							<Text style={[styles.title, styles.titlePosition]}>
								<Text style={styles.titleTxt}>
									<Text
										style={styles.tnLchTrn}
									>{`Tên lịch trộn:           `}</Text>
									<Text style={styles.text}>{` `}</Text>
									<Text style={styles.tnLchTrn}>{` `}</Text>
								</Text>
							</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>
								Bón phân 1
							</Text>
						</View>
						<Image
							style={[styles.nameChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.timestart, styles.timestartPosition]}>
						<View style={[styles.timeStart, styles.trnPosition]}>
							<Text
								style={[styles.thiGianBt, styles.trnTypo]}
							>{`Thời gian bắt đầu:  `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>
								12:22, 08/06/2024
							</Text>
						</View>
						<Image
							style={[styles.timestartChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.volume, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Tổng lượng trộn:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>900ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.mixer1, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Máy trộn phân 1:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.mixer2, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Máy trộn phân 2:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.mixer3, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Máy trộn phân 3:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.area1, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Khu vườn 1:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.area2, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Khu vườn 2:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
					<View style={[styles.area3, styles.areaLayout]}>
						<View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
							<Text
								style={[styles.tngLngTrn, styles.trnPosition]}
							>{`Khu vườn 3:      `}</Text>
							<Text style={[styles.tnBTrn1, styles.trnPosition]}>300ml</Text>
						</View>
						<Image
							style={[styles.volumeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-21.png')}
						/>
					</View>
				</View>
				<View style={styles.toolscheduler}>
					<View style={styles.headerScheduler}>
						<Text style={[styles.chiTitLch, styles.chiTitLchTypo]}>
							CHI TIẾT LỊCH TRỘN
						</Text>
					</View>
				</View>
				<Pressable style={[styles.buttondelete, styles.buttonOnShadowBox]}>
					<Text style={[styles.btLchTrn, styles.trnTypo]}>XÓA LỊCH TRỘN</Text>
				</Pressable>
			</View>
			<Pressable
				style={styles.headerbar}
				onPress={() => navigation.navigate('MnHnhChnhApp')}
			>
				<Text style={[styles.iotGardenApp, styles.time1Typo]}>
					IOT GARDEN APP
				</Text>
				<Image
					style={[styles.lineArrowLeftIcon, styles.timestartPosition]}
					contentFit='cover'
					source={require('../assets/line-arrowleft1.png')}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	statusBarBg: {
		backgroundColor: Color.colorWhite,
		overflow: 'hidden',
	},
	buttonOnShadowBox: {
		height: 33,
		backgroundColor: Color.colorCornflowerblue,
		top: 488,
		width: '36.21%',
		borderRadius: Border.br_xl,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		overflow: 'hidden',
	},
	trnTypo: {
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		textAlign: 'left',
	},
	tnBTrnPosition: {
		height: 20,
		top: 0,
		left: 7,
		position: 'absolute',
	},
	titlePosition: {
		alignItems: 'center',
		display: 'flex',
		top: 0,
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		left: 0,
		position: 'absolute',
	},
	trnPosition: {
		top: 0,
		position: 'absolute',
	},
	childLayout: {
		height: 0,
		width: 241,
		left: 0,
		position: 'absolute',
	},
	timestartPosition: {
		left: 12,
		position: 'absolute',
	},
	areaLayout: {
		height: 27,
		width: 241,
		left: 12,
		position: 'absolute',
	},
	chiTitLchTypo: {
		fontSize: FontSize.size_xl,
		color: Color.colorBlack,
	},
	time1Typo: {
		fontFamily: FontFamily.poppinsBold,
		fontWeight: '700',
		letterSpacing: 0,
	},
	statusPosition: {
		height: 37,
		top: 0,
		width: 375,
		left: 0,
		position: 'absolute',
	},
	iotGardenAppPosition: {
		top: 13,
		right: 13,
		position: 'absolute',
	},
	timePosition: {
		left: 11,
		position: 'absolute',
	},
	homeIndicator: {
		marginLeft: -67.5,
		bottom: 14,
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
	btLchTrn: {
		fontSize: FontSize.size_smi,
		textAlign: 'left',
		color: Color.colorWhite,
		left: 13,
		fontWeight: '700',
		letterSpacing: 0,
		top: 9,
		position: 'absolute',
	},
	buttonOn: {
		right: '4.6%',
		left: '59.2%',
	},
	tnLchTrn: {
		color: Color.colorBlack,
	},
	text: {
		color: Color.colorRed,
	},
	titleTxt: {
		width: '100%',
	},
	title: {
		width: 96,
		fontSize: FontSize.size_mid,
		textAlign: 'left',
	},
	tnBTrn1: {
		left: 136,
		color: Color.colorRed,
		fontSize: FontSize.size_mid,
		textAlign: 'left',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
	},
	tnBTrn: {
		width: 217,
	},
	nameChild: {
		top: 29,
	},
	name: {
		height: 29,
		width: 241,
		left: 12,
		top: 9,
		position: 'absolute',
	},
	thiGianBt: {
		top: 1,
		color: Color.colorBlack,
		fontSize: FontSize.size_mid,
		textAlign: 'left',
		left: 0,
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	timeStart: {
		width: 257,
		height: 21,
		left: 7,
	},
	timestartChild: {
		top: 28,
	},
	timestart: {
		top: 45,
		width: 264,
		height: 28,
	},
	tngLngTrn: {
		color: Color.colorBlack,
		fontSize: FontSize.size_mid,
		textAlign: 'left',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		left: 0,
	},
	tngDungDch: {
		width: 180,
	},
	volumeChild: {
		top: 27,
	},
	volume: {
		top: 83,
	},
	mixer1: {
		top: 120,
	},
	mixer2: {
		top: 157,
	},
	mixer3: {
		top: 194,
	},
	area1: {
		top: 231,
	},
	area2: {
		top: 268,
	},
	area3: {
		top: 305,
	},
	detail: {
		top: 95,
		width: 333,
		height: 371,
		left: 7,
		borderRadius: Border.br_xl,
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		position: 'absolute',
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	chiTitLch: {
		justifyContent: 'center',
		width: 221,
		textAlign: 'center',
		alignItems: 'center',
		display: 'flex',
		top: 0,
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		left: 0,
		position: 'absolute',
	},
	headerScheduler: {
		right: 37,
		left: 36,
		height: 23,
		top: 12,
		position: 'absolute',
	},
	toolscheduler: {
		top: 21,
		left: 30,
		shadowColor: 'rgba(122, 110, 110, 0.5)',
		shadowRadius: 6,
		elevation: 6,
		borderRadius: Border.br_mini,
		width: 294,
		height: 46,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		position: 'absolute',
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	buttondelete: {
		right: '55.17%',
		left: '8.62%',
	},
	lchTrn: {
		top: 110,
		backgroundColor: Color.colorAquamarine,
		width: 348,
		height: 548,
		position: 'absolute',
		overflow: 'hidden',
		borderRadius: Border.br_11xl,
		left: '50%',
		transform: [{ translateX: -174 }],
	},
	iotGardenApp: {
		top: 13,
		right: 13,
		position: 'absolute',
		fontSize: FontSize.size_xl,
		color: Color.colorBlack,
		textAlign: 'left',
	},
	lineArrowLeftIcon: {
		width: 38,
		height: 38,
		top: 9,
		left: 12,
	},
	headerbar: {
		borderStyle: 'solid',
		borderColor: Color.colorBlack,
		borderTopWidth: 2,
		borderBottomWidth: 2,
		height: 58,
		right: 13,
		top: 23,
		left: 13,
		position: 'absolute',
		overflow: 'hidden',
	},
	mainscreen: {
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
	},
	time1: {
		marginTop: -7.5,
		top: '50%',
		fontFamily: FontFamily.poppinsBold,
		fontWeight: '700',
		letterSpacing: 0,
		textAlign: 'center',
		fontSize: FontSize.size_mid,
		color: Color.colorWhite,
	},
	time: {
		top: 6,
		width: 56,
		height: 23,
	},
	statusBar: {
		borderTopLeftRadius: Border.br_11xl,
		borderTopRightRadius: Border.br_11xl,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	chiTit1BTrnTt: {
		flex: 1,
		height: 798,
		overflow: 'hidden',
		width: '100%',
		borderRadius: Border.br_11xl,
	},
});

export default ChiTit1BTrnTt;
