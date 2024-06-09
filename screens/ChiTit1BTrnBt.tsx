import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ChiTit1BTrnBt = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.chiTit1BTrnBt, styles.statusBarBg]}>
      <View style={styles.mainscreen}>
        <View style={styles.headerbar}>
          <Text style={[styles.iotGardenApp, styles.titleTypo]}>
            IOT GARDEN APP
          </Text>
          <Pressable
            style={[styles.lineArrowLeft, styles.timestartPosition]}
            onPress={() => navigation.navigate("MnHnhChnhApp")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/line-arrowleft.png")}
            />
          </Pressable>
        </View>
        <View style={styles.lchTrn}>
          <Pressable style={[styles.buttonOn, styles.buttonOnShadowBox]}>
            <Text style={[styles.ttLchTrn, styles.trnTypo]}>TẮT LỊCH TRỘN</Text>
          </Pressable>
          <View style={[styles.detail, styles.detailPosition]}>
            <View style={styles.name}>
              <View style={[styles.tnBTrn, styles.tnBTrnPosition]}>
                <Text style={[styles.title, styles.titleFlexBox]}>
                  <Text style={styles.titleTxt}>
                    <Text
                      style={styles.tnLchTrn}
                    >{`Tên lịch trộn:           `}</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.tnLchTrn}>{` `}</Text>
                  </Text>
                </Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>Bón phân 1</Text>
              </View>
              <Image
                style={[styles.nameChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.timestart, styles.timestartPosition]}>
              <View style={[styles.timeStart, styles.detailPosition]}>
                <Text
                  style={[styles.thiGianBt, styles.trnTypo]}
                >{`Thời gian bắt đầu:  `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>
                  12:22, 08/06/2024
                </Text>
              </View>
              <Image
                style={[styles.timestartChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.volume, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Tổng lượng trộn:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>900ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.mixer1, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Máy trộn phân 1:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.mixer2, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Máy trộn phân 2:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.mixer3, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Máy trộn phân 3:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.area1, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Khu vườn 1:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.area2, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Khu vườn 2:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
            <View style={[styles.area3, styles.areaLayout]}>
              <View style={[styles.tngDungDch, styles.tnBTrnPosition]}>
                <Text
                  style={[styles.tngLngTrn, styles.trnTypo]}
                >{`Khu vườn 3:      `}</Text>
                <Text style={[styles.tnBTrn1, styles.trnTypo]}>300ml</Text>
              </View>
              <Image
                style={[styles.volumeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
            </View>
          </View>
          <View style={styles.toolscheduler}>
            <Text style={[styles.chiTitLch, styles.time1Typo]}>
              CHI TIẾT LỊCH TRỘN
            </Text>
          </View>
          <Pressable style={[styles.buttondelete, styles.buttonOnShadowBox]}>
            <Text style={[styles.ttLchTrn, styles.trnTypo]}>XÓA LỊCH TRỘN</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  titleTypo: {
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 0,
  },
  timestartPosition: {
    left: 12,
    position: "absolute",
  },
  buttonOnShadowBox: {
    height: 33,
    backgroundColor: Color.colorCornflowerblue,
    top: 488,
    width: "36.21%",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  trnTypo: {
    fontFamily: FontFamily.timesNewRoman,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  detailPosition: {
    left: 7,
    position: "absolute",
  },
  tnBTrnPosition: {
    height: 20,
    top: 0,
    left: 7,
    position: "absolute",
  },
  titleFlexBox: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.timesNewRoman,
    position: "absolute",
  },
  childLayout: {
    height: 0,
    width: 241,
    left: 0,
    position: "absolute",
  },
  areaLayout: {
    height: 27,
    width: 241,
    left: 12,
    position: "absolute",
  },
  time1Typo: {
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 0,
  },
  statusPosition: {
    height: 37,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iotGardenAppPosition: {
    top: 13,
    right: 13,
    position: "absolute",
  },
  timePosition: {
    left: 11,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 14,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    position: "absolute",
  },
  iotGardenApp: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_xl,
    top: 13,
    right: 13,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  lineArrowLeft: {
    width: 38,
    height: 38,
    top: 9,
  },
  headerbar: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 58,
    left: 13,
    right: 13,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  ttLchTrn: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    top: 9,
    left: 13,
  },
  buttonOn: {
    right: "4.6%",
    left: "59.2%",
  },
  tnLchTrn: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorRed,
  },
  titleTxt: {
    width: "100%",
  },
  title: {
    width: 96,
    fontSize: FontSize.size_mid,
    top: 0,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 0,
    left: 0,
  },
  tnBTrn1: {
    left: 136,
    color: Color.colorRed,
    fontSize: FontSize.size_mid,
    top: 0,
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
    top: 9,
    left: 12,
    position: "absolute",
  },
  thiGianBt: {
    top: 1,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    left: 0,
  },
  timeStart: {
    width: 257,
    height: 21,
    top: 0,
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
    fontSize: FontSize.size_mid,
    top: 0,
    color: Color.colorBlack,
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
    borderRadius: Border.br_xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 7,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  chiTitLch: {
    left: 36,
    justifyContent: "center",
    width: 221,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.timesNewRoman,
    position: "absolute",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: 12,
    textAlign: "center",
  },
  toolscheduler: {
    top: 21,
    left: 30,
    shadowColor: "rgba(122, 110, 110, 0.5)",
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
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  buttondelete: {
    right: "55.17%",
    left: "8.62%",
  },
  lchTrn: {
    top: 107,
    left: 14,
    backgroundColor: Color.colorAquamarine,
    width: 348,
    height: 548,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  mainscreen: {
    top: 37,
    height: 730,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
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
    top: "50%",
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
  },
  time: {
    top: 6,
    width: 56,
    height: 23,
  },
  statusBar: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  chiTit1BTrnBt: {
    flex: 1,
    height: 798,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default ChiTit1BTrnBt;
