import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Text style={styles.ngNhp}>ĐĂNG NHẬP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ngNhp: {
    position: "absolute",
    top: 14,
    left: 62,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.timesNewRoman,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 242,
    height: 51,
    overflow: "hidden",
  },
});

export default SignUp;
