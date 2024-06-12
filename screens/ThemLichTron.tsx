import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Pressable,
	Text,
	TextInput,
	Platform,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { Image } from 'expo-image';
import { Datepicker as RNKDatepicker } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { Color, FontSize, Border, FontFamily } from '../GlobalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

const ThemLichTron = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [date, setDate] = useState(new Date(2024, 5, 12)); // June 8, 2024
	const [show, setShow] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);
	const [input, setInput] = useState('');

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios'); // on iOS, show remains true until the user presses a button
		setDate(currentDate);
	};

	const onChangeTime = (event, selectedTime) => {
		if (selectedTime) {
			const currentDate = date;
			currentDate.setHours(selectedTime.getHours());
			currentDate.setMinutes(selectedTime.getMinutes());
			setDate(new Date(currentDate));
			setInput(
				`${currentDate.getHours()}:${
					currentDate.getMinutes() < 10 ? '0' : ''
				}${currentDate.getMinutes()}`
			);
		}
		if (Platform.OS === 'android') {
			setShowTimePicker(false);
		}
	};
	const showTimePickerMode = () => {
		setShowTimePicker(true);
	};
	const showMode = () => {
		setShow(true);
	};
	const handleSave = () => {
		// Print all input values
		console.log('Input 1:');
		// Print more inputs if you have more...
		// Define the body of the request
		const bodyObj = {
			'next-cycle': 1,
			mixer1: 2,
			mixer2: 2,
			mixer3: 2,
			selector1: 2,
			selector2: 2,
			selector3: 2,
			'pump-in': 2,
			'pump-out': 2,
			'time-start': input,
			active: 1,
		};
		const body = {
			value: JSON.stringify(bodyObj),
		};

		// Make the POST request
		fetch('http://io.adafruit.com/api/v2/dinhvan2211/feeds/selector/data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-AIO-Key': 'aio_qLvx85E4VdqhDFLuJ3PtzppGTWHn',
			},
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				Alert.alert('Success', 'Your operation was successful!', [
					{ text: 'OK', onPress: () => console.log('OK Pressed') },
				]);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<View style={[styles.themLichTron, styles.statusBarBg]}>
			<View style={styles.addscheduler}>
				<Pressable style={styles.buttonOn} onPress={handleSave}>
					<Text style={[styles.luLi, styles.luLiTypo]}>LƯU LẠI</Text>
				</Pressable>
				<View style={[styles.edittime, styles.edittimeShadowBox]}>
					<View style={styles.addtime}>
						<Image
							style={[styles.addtimeChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-31.png')}
						/>
						{/* <TextInput
							style={[styles.timeinput, styles.nVmlTypo]}
							placeholder='minutes'
							keyboardType='number-pad'
							placeholderTextColor='#000'
						/> */}
						<TouchableOpacity onPress={showTimePickerMode}>
							<Text style={[styles.timeinput, styles.nVmlTypo]}>
								{date.getHours()}:{date.getMinutes()}
							</Text>
						</TouchableOpacity>
						<Text
							style={[styles.tilte, styles.tilteLayout]}
						>{`Thời gian bắt đầu:  `}</Text>
					</View>
					<View style={[styles.addname, styles.nVmlPosition]}>
						<Image
							style={[styles.addnameChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-31.png')}
						/>
						<TextInput
							style={[styles.nameinput, styles.titleShadowBox]}
							placeholder='Nhập tên lịch trộn...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.title, styles.nVmlClr]}>Tên lịch trộn:</Text>
					</View>
					<View style={styles.adddate}>
						<Image
							style={[styles.adddateChild, styles.childLayout]}
							contentFit='cover'
							source={require('../assets/line-32.png')}
						/>
						<Text
							style={[styles.tilte1, styles.tilte1Position]}
						>{`Ngày bắt đầu:  `}</Text>
						<TouchableOpacity onPress={showMode}>
							<Text style={styles.showdate}>
								{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
							</Text>
						</TouchableOpacity>
						{/* <Text style={[styles.showdate, styles.tilte1Position]}>
							{calendarTickDatePicker?.toLocaleDateString()}
							{formatDate(calendarTickDatePicker)}
						</Text> */}
						{show && (
							<DateTimePicker
								testID='dateTimePicker'
								value={date}
								mode='date'
								display='default'
								onChange={onChange}
							/>
						)}
						{showTimePicker && (
							<DateTimePicker
								testID='timePicker'
								value={date}
								mode='time'
								display='default'
								onChange={onChangeTime}
							/>
						)}
						{/* <RNKDatepicker
							style={[styles.calendarTick, styles.timeinputPosition]}
							date={calendarTickDatePicker}
							onSelect={setCalendarTickDatePicker}
							controlStyle={styles.calendarTickDatePickerValue}
						/> */}
					</View>
				</View>
				<View style={[styles.title1, styles.titleShadowBox]}>
					<Text style={[styles.thmLchTrn, styles.thmLchTrnTypo]}>
						THÊM LỊCH TRỘN
					</Text>
				</View>
				<View style={[styles.settingmixer, styles.edittimeShadowBox]}>
					<View style={styles.ipvolume}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(đơn vị:ml)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập số...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tổng dung dịch trộn:
						</Text>
					</View>
					<View style={[styles.ratiomixer1, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ trộn...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ máy trộn phân 1:
						</Text>
					</View>
					<View style={[styles.title2, styles.tilte1Position]}>
						<Text style={[styles.tyChnhB, styles.nVmlClr]}>
							TÙY CHỈNH BỘ TRỘN
						</Text>
					</View>
					<View style={[styles.ratiomixer11, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ trộn...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ máy trộn phân 2:
						</Text>
					</View>
					<View style={[styles.ratiomixer12, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ trộn...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ máy trộn phân 3:
						</Text>
					</View>
					<Image
						style={[styles.settingmixerChild, styles.childLayout]}
						contentFit='cover'
						source={require('../assets/line-33.png')}
					/>
					<View style={[styles.ratioarea1, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ bón...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ bón khu vực 1:
						</Text>
					</View>
					<View style={[styles.ratioarea11, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ bón...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ bón khu vực 2:
						</Text>
					</View>
					<View style={[styles.ratioarea12, styles.ratioareaLayout]}>
						<Text style={[styles.nVml, styles.nVmlPosition]}>(1/2/3)</Text>
						<TextInput
							style={styles.ratio1ipShadowBox}
							placeholder='Nhập tỉ lệ bón...'
							placeholderTextColor='#000'
						/>
						<Text style={[styles.tngDungDch, styles.nVmlClr]}>
							Tỉ lệ bón khu vực 3:
						</Text>
					</View>
				</View>
			</View>
			<View style={[styles.headerbar, styles.headerbarPosition]}>
				<Text style={[styles.iotGardenApp, styles.time1Typo]}>
					IOT GARDEN APP
				</Text>
				<Pressable style={styles.lineArrowLeft} onClick={() => {}}>
					<Image
						style={styles.icon}
						contentFit='cover'
						source={require('../assets/line-arrowleft1.png')}
					/>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	calendarTickDatePickerValue: {
		position: 'absolute',
		left: 228,
		top: 0,
		width: 24,
		height: 24,
	},
	statusBarBg: {
		backgroundColor: Color.colorWhite,
		overflow: 'hidden',
	},
	luLiTypo: {
		textAlign: 'center',
		fontSize: FontSize.size_mid,
	},
	edittimeShadowBox: {
		width: 333,
		borderWidth: 1,
		borderColor: Color.colorGainsboro,
		backgroundColor: Color.colorHoneydew,
		borderStyle: 'solid',
		left: 7,
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
	childLayout: {
		height: 0,
		position: 'absolute',
	},
	nVmlTypo: {
		fontSize: FontSize.size_3xs,
		fontStyle: 'italic',
	},
	tilteLayout: {
		height: 21,
		fontFamily: FontFamily.timesNewRoman,
	},
	nVmlPosition: {
		top: 8,
		position: 'absolute',
	},
	titleShadowBox: {
		borderRadius: Border.br_mini,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	nVmlClr: {
		color: Color.colorBlack,
		fontFamily: FontFamily.timesNewRoman,
		letterSpacing: 0,
	},
	tilte1Position: {
		top: 4,
		position: 'absolute',
	},
	timeinputPosition: {
		top: 0,
		position: 'absolute',
	},
	thmLchTrnTypo: {
		fontSize: FontSize.size_xl,
		color: Color.colorBlack,
	},
	ratioareaLayout: {
		width: 275,
		height: 26,
		left: 16,
		position: 'absolute',
	},
	headerbarPosition: {
		right: 13,
		position: 'absolute',
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
	timePosition: {
		left: 11,
		position: 'absolute',
	},
	homeIndicator: {
		marginLeft: -67.5,
		bottom: 14,
		borderRadius: Border.br_81xl,
		backgroundColor: Color.colorBlack,
		width: 134,
		height: 5,
		transform: [
			{
				rotate: '0.1deg',
			},
		],
		left: '50%',
		position: 'absolute',
	},
	luLi: {
		marginLeft: -34.5,
		color: Color.colorWhite,
		textAlign: 'center',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		top: 6,
		left: '50%',
		position: 'absolute',
	},
	buttonOn: {
		width: '60.63%',
		top: 556,
		right: '19.83%',
		left: '19.54%',
		backgroundColor: Color.colorCornflowerblue,
		height: 33,
		borderRadius: Border.br_xl,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		overflow: 'hidden',
	},
	addtimeChild: {
		top: 29,
		width: 241,
		left: 0,
	},
	timeinput: {
		width: 97,
		height: 22,
		left: 143,
		top: 5,
		position: 'absolute',
		fontFamily: FontFamily.timesNewRoman,
	},
	tilte: {
		top: 1,
		width: 130,
		height: 21,
		alignItems: 'center',
		display: 'flex',
		textAlign: 'left',
		color: Color.colorBlack,
		fontSize: FontSize.size_mini,
		fontWeight: '700',
		letterSpacing: 0,
		left: 19,
		position: 'absolute',
	},
	addtime: {
		top: 44,
		height: 29,
		width: 241,
		left: 12,
		position: 'absolute',
	},
	addnameChild: {
		top: 30,
		width: 241,
		left: 0,
	},
	nameinput: {
		width: 163,
		height: 21,
		fontFamily: FontFamily.timesNewRoman,
		fontSize: FontSize.size_3xs,
		fontStyle: 'italic',
		left: 143,
		top: 0,
		position: 'absolute',
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		borderRadius: Border.br_mini,
	},
	title: {
		top: 3,
		textAlign: 'left',
		fontSize: FontSize.size_mini,
		color: Color.colorBlack,
		fontWeight: '700',
		position: 'absolute',
		left: 19,
	},
	addname: {
		width: 306,
		height: 30,
		left: 12,
	},
	adddateChild: {
		top: 32,
		width: 241,
		left: 0,
	},
	tilte1: {
		height: 21,
		fontFamily: FontFamily.timesNewRoman,
		width: 130,
		alignItems: 'center',
		display: 'flex',
		textAlign: 'left',
		color: Color.colorBlack,
		fontSize: FontSize.size_mini,
		fontWeight: '700',
		letterSpacing: 0,
		left: 19,
		top: 4,
	},
	showdate: {
		textAlign: 'left',
		color: Color.colorBlack,
		fontFamily: FontFamily.timesNewRoman,
		letterSpacing: 0,
		left: 143,
		fontWeight: '700',
		fontSize: FontSize.size_mid,
		top: 4,
	},
	calendarTick: {
		left: 228,
		width: 24,
		height: 24,
	},
	adddate: {
		top: 76,
		width: 252,
		height: 32,
		left: 12,
		position: 'absolute',
	},
	edittime: {
		top: 77,
		height: 122,
	},
	thmLchTrn: {
		left: 36,
		justifyContent: 'center',
		width: 221,
		top: 12,
		alignItems: 'center',
		display: 'flex',
		fontSize: FontSize.size_xl,
		textAlign: 'center',
		fontFamily: FontFamily.timesNewRoman,
		fontWeight: '700',
		letterSpacing: 0,
		position: 'absolute',
	},
	title1: {
		left: 27,
		shadowColor: 'rgba(122, 110, 110, 0.5)',
		shadowRadius: 6,
		elevation: 6,
		width: 294,
		height: 46,
		top: 13,
		position: 'absolute',
	},
	nVml: {
		left: 249,
		textAlign: 'left',
		color: Color.colorBlack,
		fontFamily: FontFamily.timesNewRoman,
		letterSpacing: 0,
		fontSize: FontSize.size_3xs,
		fontStyle: 'italic',
	},
	ratio1ipShadowBox: {
		width: 95,
		borderRadius: Border.br_8xs,
		left: 151,
		height: 26,
		fontSize: FontSize.size_3xs,
		fontStyle: 'italic',
		top: 0,
		fontFamily: FontFamily.timesNewRoman,
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
		backgroundColor: Color.colorWhite,
	},
	tngDungDch: {
		top: 5,
		textAlign: 'left',
		fontSize: FontSize.size_mini,
		color: Color.colorBlack,
		fontWeight: '700',
		position: 'absolute',
		left: 0,
	},
	ipvolume: {
		top: 50,
		width: 291,
		height: 26,
		left: 16,
		position: 'absolute',
	},
	ratiomixer1: {
		top: 88,
	},
	tyChnhB: {
		top: 7,
		textAlign: 'center',
		fontSize: FontSize.size_mid,
		fontWeight: '700',
		left: 14,
		position: 'absolute',
	},
	title2: {
		left: 66,
		width: 202,
		height: 34,
		borderRadius: Border.br_mini,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
		elevation: 4,
		shadowRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
	},
	ratiomixer11: {
		top: 126,
	},
	ratiomixer12: {
		top: 164,
	},
	settingmixerChild: {
		top: 205,
		left: 20,
		width: 152,
	},
	ratioarea1: {
		top: 217,
	},
	ratioarea11: {
		top: 255,
	},
	ratioarea12: {
		top: 293,
	},
	settingmixer: {
		top: 210,
		height: 335,
	},
	addscheduler: {
		top: 120,
		backgroundColor: Color.colorAquamarine,
		width: 348,
		height: 609,
		overflow: 'hidden',
		borderRadius: Border.br_11xl,
		left: '50%',
		transform: [{ translateX: -174 }],
	},
	iotGardenApp: {
		right: 13,
		position: 'absolute',
		fontSize: FontSize.size_xl,
		color: Color.colorBlack,
		top: 13,
		textAlign: 'left',
	},
	icon: {
		height: '100%',
		width: '100%',
	},
	lineArrowLeft: {
		top: 9,
		width: 38,
		height: 38,
		left: 12,
		position: 'absolute',
	},
	headerbar: {
		left: 13,
		borderColor: Color.colorBlack,
		borderTopWidth: 2,
		borderBottomWidth: 2,
		height: 58,
		top: 30,
		borderStyle: 'solid',
		right: 13,
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
		top: 13,
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
		width: 56,
		height: 23,
		top: 6,
		left: 11,
	},
	statusBar: {
		borderTopLeftRadius: Border.br_11xl,
		borderTopRightRadius: Border.br_11xl,
		overflow: 'hidden',
		backgroundColor: Color.colorWhite,
	},
	themLichTron: {
		flex: 1,
		height: 798,
		overflow: 'hidden',
		width: '100%',
		borderRadius: Border.br_11xl,
	},
});

export default ThemLichTron;
