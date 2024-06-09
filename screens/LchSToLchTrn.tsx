import * as React from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const LchSToLchTrn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.lchSToLchTrn}>
        <ScrollView
          style={[styles.lchTrn, styles.lchTrnPosition]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.lchTrnScrollViewContent}
        >
          <View style={styles.toolscheduler}>
            <View style={[styles.headerScheduler, styles.timeLayout]}>
              <Text style={[styles.lchSTrn, styles.lchTypo]}>
                LỊCH SỬ TRỘN PHÂN
              </Text>
            </View>
          </View>
          <View style={styles.lchShadowBox}>
            <Text style={[styles.tnLchTrnContainer, styles.bnPhn1Position]}>
              <Text style={styles.tnLchTrnContainer1}>
                <Text
                  style={styles.tnLchTrn}
                >{`Tên lịch trộn:           `}</Text>
                <Text style={styles.text}>{` `}</Text>
                <Text style={styles.tnLchTrn}>{` `}</Text>
              </Text>
            </Text>
            <Text style={[styles.bnPhn1, styles.textPosition]}>Bón phân 1</Text>
            <Text
              style={[styles.thiGianBt, styles.lchTypo]}
            >{`Thời gian bắt đầu:  `}</Text>
            <Text
              style={[styles.thiGianDng, styles.text3Typo]}
            >{`Thời gian dừng:      `}</Text>
            <Image
              style={[styles.lchTrn1Child, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <Image
              style={[styles.lchTrn1Item, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={[styles.text2, styles.textPosition]}>
              12:22, 08/06/2024
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>
              14:22, 08/06/2024
            </Text>
          </View>
          <View style={styles.lchShadowBox}>
            <Text style={[styles.tnLchTrnContainer, styles.bnPhn1Position]}>
              <Text style={styles.tnLchTrnContainer1}>
                <Text
                  style={styles.tnLchTrn}
                >{`Tên lịch trộn:           `}</Text>
                <Text style={styles.text}>{` `}</Text>
                <Text style={styles.tnLchTrn}>{` `}</Text>
              </Text>
            </Text>
            <Text style={[styles.bnPhn1, styles.textPosition]}>Bón phân 1</Text>
            <Text
              style={[styles.thiGianBt, styles.lchTypo]}
            >{`Thời gian bắt đầu:  `}</Text>
            <Text
              style={[styles.thiGianDng, styles.text3Typo]}
            >{`Thời gian dừng:      `}</Text>
            <Image
              style={[styles.lchTrn1Child, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <Image
              style={[styles.lchTrn1Item, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={[styles.text2, styles.textPosition]}>
              12:22, 08/06/2024
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>
              14:22, 08/06/2024
            </Text>
          </View>
          <View style={styles.lchShadowBox}>
            <Text style={[styles.tnLchTrnContainer, styles.bnPhn1Position]}>
              <Text style={styles.tnLchTrnContainer1}>
                <Text
                  style={styles.tnLchTrn}
                >{`Tên lịch trộn:           `}</Text>
                <Text style={styles.text}>{` `}</Text>
                <Text style={styles.tnLchTrn}>{` `}</Text>
              </Text>
            </Text>
            <Text style={[styles.bnPhn1, styles.textPosition]}>Bón phân 1</Text>
            <Text
              style={[styles.thiGianBt, styles.lchTypo]}
            >{`Thời gian bắt đầu:  `}</Text>
            <Text
              style={[styles.thiGianDng, styles.text3Typo]}
            >{`Thời gian dừng:      `}</Text>
            <Image
              style={[styles.lchTrn1Child, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <Image
              style={[styles.lchTrn1Item, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={[styles.text2, styles.textPosition]}>
              12:22, 08/06/2024
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>
              14:22, 08/06/2024
            </Text>
          </View>
          <View style={styles.lchShadowBox}>
            <Text style={[styles.tnLchTrnContainer, styles.bnPhn1Position]}>
              <Text style={styles.tnLchTrnContainer1}>
                <Text
                  style={styles.tnLchTrn}
                >{`Tên lịch trộn:           `}</Text>
                <Text style={styles.text}>{` `}</Text>
                <Text style={styles.tnLchTrn}>{` `}</Text>
              </Text>
            </Text>
            <Text style={[styles.bnPhn1, styles.textPosition]}>Bón phân 1</Text>
            <Text
              style={[styles.thiGianBt, styles.lchTypo]}
            >{`Thời gian bắt đầu:  `}</Text>
            <Text
              style={[styles.thiGianDng, styles.text3Typo]}
            >{`Thời gian dừng:      `}</Text>
            <Image
              style={[styles.lchTrn1Child, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <Image
              style={[styles.lchTrn1Item, styles.lchLayout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={[styles.text2, styles.textPosition]}>
              12:22, 08/06/2024
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>
              14:22, 08/06/2024
            </Text>
          </View>
        </ScrollView>
        <View style={styles.warnning}>
          <Image
            style={[styles.warning2Icon, styles.lchTrnLyPosition]}
            contentFit="cover"
            source={require("../assets/warning2.png")}
          />
          <Text style={[styles.lchTrnLy, styles.lchTrnLyPosition]}>
            Lịch trộn lấy trong 10 ngày gần nhất !
          </Text>
        </View>
        <View style={styles.headerbar}>
          <Text style={[styles.iotGardenApp, styles.time1Typo]}>
            IOT GARDEN APP
          </Text>
          <Pressable
            style={[styles.lineArrowLeft, styles.bnPhn1Position]}
            onPress={() => navigation.navigate("MnHnhChnhApp")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/line-arrowleft.png")}
            />
          </Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  lchTrnScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  lchTrnPosition: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    overflow: "hidden",
  },
  timeLayout: {
    height: 23,
    position: "absolute",
  },
  lchTypo: {
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
  },
  bnPhn1Position: {
    top: 9,
    position: "absolute",
  },
  textPosition: {
    left: 155,
    color: Color.colorRed,
  },
  text3Typo: {
    top: 81,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.timesNewRoman,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  lchLayout: {
    height: 0,
    width: 241,
    left: 11,
    position: "absolute",
  },
  lchTrnLyPosition: {
    top: 11,
    position: "absolute",
  },
  time1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
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
  lchSTrn: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  headerScheduler: {
    right: 65,
    left: 66,
    top: 12,
    height: 23,
  },
  toolscheduler: {
    shadowColor: "rgba(122, 110, 110, 0.5)",
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
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    top: 5,
  },
  tnLchTrn: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorRed,
  },
  tnLchTrnContainer1: {
    width: "100%",
  },
  tnLchTrnContainer: {
    display: "flex",
    alignItems: "center",
    width: 96,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    left: 19,
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    fontWeight: "700",
  },
  bnPhn1: {
    textAlign: "left",
    fontSize: FontSize.size_mid,
    top: 9,
    position: "absolute",
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    fontWeight: "700",
  },
  thiGianBt: {
    top: 45,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    left: 19,
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    position: "absolute",
  },
  thiGianDng: {
    left: 19,
    color: Color.colorBlack,
  },
  lchTrn1Child: {
    top: 38,
  },
  lchTrn1Item: {
    top: 73,
  },
  text2: {
    top: 44,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    fontWeight: "700",
    position: "absolute",
  },
  text3: {
    left: 155,
    color: Color.colorRed,
  },
  lchShadowBox: {
    marginTop: 31,
    height: 116,
    width: 333,
    borderRadius: Border.br_xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  lchTrn: {
    top: 148,
    backgroundColor: Color.colorLimegreen_100,
    left: '50%',
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    position: "absolute",
    flex: 1,
    transform: [{translateX: -187}],
  },
  warning2Icon: {
    left: 16,
    width: 24,
    height: 24,
  },
  lchTrnLy: {
    left: '50%',
    fontStyle: "italic",
    textAlign: "left",
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.timesNewRoman,
    letterSpacing: 0,
    top: 13,
    transform: [{translateX: -100} ]
  },
  warnning: {
    top: 75,
    right: 23,
    left: 25,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  iotGardenApp: {
    top: 13,
    right: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  lineArrowLeft: {
    left: 12,
    width: 38,
    height: 38,
  },
  headerbar: {
    left: 13,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 58,
    right: 13,
    top: 23,
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
  },
  time1: {
    marginTop: -7.5,
    top: "50%",
    color: Color.colorWhite,
    left: 11,
    fontSize: FontSize.size_mid,
    textAlign: "center",
  },
  time: {
    top: 6,
    width: 56,
    left: 11,
  },
  statusBar: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 37,
  },
  lchSToLchTrn: {
    height: 798,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default LchSToLchTrn;
