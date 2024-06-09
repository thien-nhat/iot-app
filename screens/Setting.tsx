import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.setting, styles.settingBg]}>
      <View style={styles.mainscreen}>
        <View style={styles.mainsetting}>
          <Pressable
            style={styles.logout}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.logOut, styles.logOutTypo]}>LOG OUT</Text>
            <Image
              style={styles.logoutIcon}
              contentFit="cover"
              source={require("../assets/logout.png")}
            />
          </Pressable>
          <Pressable style={styles.changepassword}>
            <Image
              style={styles.logoutIcon}
              contentFit="cover"
              source={require("../assets/key.png")}
            />
            <Text style={[styles.changePassword, styles.logOutTypo]}>
              CHANGE PASSWORD
            </Text>
          </Pressable>
        </View>
        <Pressable style={[styles.title, styles.titlePosition]}>
          <Text style={[styles.settings, styles.settingsTypo]}>SETTINGS</Text>
        </Pressable>
        <View style={styles.headerbar}>
          <Text style={[styles.iotGardenApp, styles.iotGardenAppPosition]}>
            IOT GARDEN APP
          </Text>
          <Pressable
            style={[styles.lineArrowLeft, styles.titlePosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  settingBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  logOutTypo: {
    textAlign: "right",
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
    top: 10,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  titlePosition: {
    left: 12,
    position: "absolute",
  },
  settingsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  iotGardenAppPosition: {
    top: 13,
    right: 13,
    position: "absolute",
  },
  statusPosition: {
    height: 37,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  time1Clr: {
    color: Color.colorWhite,
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
  logOut: {
    left: 254,
  },
  logoutIcon: {
    width: 32,
    height: 32,
    left: 13,
    top: 10,
    position: "absolute",
  },
  logout: {
    top: 64,
    height: 52,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 348,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  changePassword: {
    left: 137,
  },
  changepassword: {
    top: 0,
    height: 52,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 348,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  mainsetting: {
    top: 176,
    height: 116,
    width: 348,
    left: 11,
    position: "absolute",
  },
  settings: {
    top: 7,
    left: 134,
    color: Color.colorWhite,
    position: "absolute",
  },
  title: {
    top: 96,
    backgroundColor: Color.colorCornflowerblue,
    height: 43,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 12,
    width: 348,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  iotGardenApp: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  lineArrowLeft: {
    top: 9,
    width: 38,
    height: 38,
  },
  headerbar: {
    top: 12,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 58,
    right: 13,
    left: 13,
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
    backgroundColor: Color.colorWhite,
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
    fontSize: FontSize.size_mid,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    color: Color.colorWhite,
    left: 11,
  },
  time: {
    top: 6,
    width: 56,
    height: 23,
    left: 11,
    position: "absolute",
  },
  statusBar: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  setting: {
    flex: 1,
    height: 798,
    width: "100%",
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Setting;
