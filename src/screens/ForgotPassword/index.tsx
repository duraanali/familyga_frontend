import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, View, Platform, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgDelete from "@svgs/ForgotPassword/SvgDelete";
import SendItem from "@screens/ForgotPassword/components/SendItem";
import ROUTES from "@utils/routes";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { widthScreen } from "@utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Container from "@components/Container";
import Content from "@components/Content";

const ForgotPassword = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { bottom, top } = useSafeAreaInsets();
  const onVerifyEmail = useCallback(() => {
    navigate(ROUTES.VerifyEmail);
  }, []);

  const onVerifyMobile = useCallback(() => {
    navigate(ROUTES.VerifyMobile);
  }, []);

  const onSignUp = useCallback(() => {
    navigate(ROUTES.SignUp);
  }, []);

  return (
    <Container style={styles.container}>
      <Content>
        <Image
          style={styles.imgLock}
          source={require("@assets/ForgotPassword/Lock.png")}
        />
        <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
        <Text style={styles.txtWorry}>
          {"Do not worry! We will help you recover your password 🔑"}
        </Text>
        <SendItem
          onPress={onVerifyEmail}
          style={styles.sendItem}
          title={"Send Your Email️"}
          icon={"✉️"}
          description={"We will send new password your email:\n"}
          content={"t***9@gmail.com"}
        />
        <SendItem
          onPress={onVerifyMobile}
          style={styles.sendItem1}
          title={"Send Your Phone Number"}
          icon={"📲️️"}
          description={"We will send new password your \nphone number:"}
          content={" +8*******90"}
        />
      </Content>
      <View style={[styles.top, { top: top + 12 }]}>
        <SvgSmallHeart />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={styles.viewDelete}
        >
          <SvgDelete />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onSignUp}
        style={[styles.signUpView, { paddingBottom: bottom + 8 }]}
      >
        <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
      </TouchableOpacity>
    </Container>
  );
});

export default ForgotPassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewDelete: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.dimGray,
    justifyContent: "center",
    alignItems: "center",
  },
  imgLock: {
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() + 40 : 40,
    alignSelf: "center",
    width: widthScreen / 2.05,
    height: widthScreen / 2.3,
  },
  txtForgotPassword: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.bluePrimary,
    textAlign: "center",
    marginTop: 35,
  },
  txtWorry: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginTop: 4,
    marginHorizontal: 50,
  },
  sendItem: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  sendItem1: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  signUpView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: colors.white,
    right: 0,
    left: 0,
    bottom: 0,
    paddingTop: 8,
  },
  txtSignUp: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 32,
    paddingRight: 16,
    position: "absolute",
    right: 0,
    left: 0,
  },
});
