import React, { memo, useState, useCallback } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import { getHeightByPercent } from "@utils/size";
import FONTS from "@utils/fonts/index";
import TextInputHealer from "@components/TextInputHealer";
import SvgUser from "@svgs/SignIn/SvgUser";
import SvgLock from "@svgs/SignIn/SvgLock";
import SvgEmail from "@svgs/SignUp/SvgEmail";
import SvgLine from "@svgs/SignIn/SvgLine";
import ButtonPrimary from "@components/ButtonPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import ROUTES from "@utils/routes";
import SvgSignUp from "@svgs/SignUp/SvgSignUp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "@utils/StatusBar";
import { widthScreen } from "@utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = memo(() => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const onSignIn = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, []);

  const onSignUp = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, []);

  const onFaceBook = useCallback(() => {}, []);

  const onGoogle = useCallback(() => {}, []);

  return (
    <Container
      paddingBottom={false}
      paddingTop={false}
      style={styles.container}
    >
      <View style={styles.svgView} />
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={100}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { paddingTop: top },
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <SvgSignUp style={styles.svg} />
        <View style={[styles.contentView]}>
          <Text style={styles.txtJoin}>Manage Your Familyga!</Text>
          <Text style={styles.txtVacation}>One app, one family</Text>
          <TextInputHealer
            style={styles.txtInput1}
            svg={<SvgUser />}
            placeholder={"Username/Phonenumber"}
            value={userName}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgEmail />}
            placeholder={"Email"}
            value={email}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgLock />}
            placeholder={"Password"}
            secure={true}
            value={password}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgLock />}
            placeholder={"Re-Password"}
            secure={true}
            value={rePassword}
          />
          <ButtonPrimary
            onPress={onSignUp}
            style={styles.signUp}
            title={"Sign Up"}
          />
          <View style={styles.lineView}>
            <View style={styles.line} />
            <Text style={styles.txtOr}>or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.bottomView}>
            <ButtonPrimary
              onPress={onFaceBook}
              style={styles.facebook}
              title={"Facebook"}
            />
            <ButtonPrimary
              onPress={onGoogle}
              style={styles.google}
              title={"Google"}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={[styles.top, { paddingTop: top + 12 }]}>
        <SvgSmallHeart color={colors.white} />
        <TouchableOpacity activeOpacity={0.7} onPress={onSignIn}>
          <Text style={styles.textSignIn}>Sign In </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
});

export default SignUp;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svg: {
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    marginBottom: -3,
  },
  signIn: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.white,
    position: "absolute",
    top: 56,
    right: 21,
  },
  contentView: {
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flex: 1,
    paddingHorizontal: 40,
  },
  txtJoin: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.bluePrimary,
    marginTop: 29,
  },
  txtVacation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
    marginTop: 4,
  },
  txtInput1: {
    marginTop: 27,
  },
  txtInput2: {
    marginTop: 16,
  },
  signUp: {
    marginTop: 24,
  },
  txtOr: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    color: colors.dimGray,
    marginHorizontal: 24,
  },
  lineView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
  },
  bottomView: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  facebook: {
    marginRight: 12,
  },
  google: {
    backgroundColor: colors.secondRed,
  },
  contentContainerStyle: {
    paddingBottom: 24,
  },
  svgView: {
    backgroundColor: colors.green,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: getHeightByPercent(50),
  },
  top: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingLeft: 32,
    paddingRight: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textSignIn: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    color: colors.white,
    lineHeight: 20,
    textTransform: "uppercase",
  },
  line: {
    backgroundColor: colors.pageBackGround,
    height: 1,
    flex: 1,
  },
});
