import React, { memo, useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgHeart from "@svgs/SignIn/SvgHeart";
import FONTS from "@utils/fonts/index";
import SvgUser from "@svgs/SignIn/SvgUser";
import SvgLock from "@svgs/SignIn/SvgLock";
import SvgFaceID from "@svgs/SignIn/SvgFaceID";
import ROUTES from "@utils/routes";
import ButtonPrimary from "@components/ButtonPrimary";
import TextInputHealer from "@components/TextInputHealer";
import { useNavigation } from "@react-navigation/native";
import HideWithKeyboard from "@components/HideWithKeyboard";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PolicyCheck from "@components/PolicyCheck";
import useToggle from "@hooks/useToggle";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/ParentSlice'

const SignIn = memo(() => {
  const { navigate } = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [check, setCheck] = useToggle(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = useCallback(() => {
    navigate(ROUTES.SignUp);
  }, []);

  const onForgotPassword = useCallback(() => {
    navigate(ROUTES.ForgotPassword);
  }, []);

  const onSignIn = useCallback(() => {
    dispatch(loginUser({
      email: "abdiwalighg13@gmail.com",
    password: "8723987293",
    }));
    // navigate(ROUTES.SignIn);
    
  }, []);

  const onPress = useCallback(() => {}, []);

  return (
    <Container style={styles.container}>
      <View style={styles.svgHeart}>
        <SvgHeart />
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.txtWelcome}>Welcome to Familyga</Text>
        <TextInputHealer
          svg={<SvgUser />}
          placeholder={"Email"}
          value={userName}
        />
        <TextInputHealer
          style={styles.txtInput2}
          svg={<SvgLock />}
          placeholder={"Password"}
          secure={true}
          value={password}
        />
        <PolicyCheck check={check} onPress={setCheck} />
        <View style={styles.signInView}>
          <ButtonPrimary
            onPress={onSignIn}
            style={styles.signIn}
            title={"Sign In"}
            disable={!check}
          />
          {/* <TouchableOpacity activeOpacity={0.7} style={styles.viewFaceId}>
            <SvgFaceID />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          onPress={onForgotPassword}
          style={styles.forgotPasswordView}
        >
          <Text style={styles.txtForgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.lineView}>
          <View style={styles.line} />
          <Text style={styles.txtOr}>or</Text>
          <View style={styles.line} />
        </View>
        <ButtonPrimary
          onPress={onPress}
          style={styles.facebook}
          title={"Sign In With Facebook"}
        />
        <ButtonPrimary
          onPress={onPress}
          style={styles.google}
          title={"Sign In With Google"}
        />
      </KeyboardAwareScrollView>
      <HideWithKeyboard
        style={[styles.signUpView, { paddingBottom: bottom + 8 }]}
      >
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
        </TouchableOpacity>
      </HideWithKeyboard>
    </Container>
  );
});

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
  },
  svgHeart: {
    marginTop: 12,
    marginBottom: 8,
  },
  svgHumanView: {
    height: 177,
    width: 177,
    borderRadius: 177 / 2,
    backgroundColor: colors.secondRed,
    position: "absolute",
    top: 15,
    right: -177 / 2,
  },
  svgHuman: {
    marginTop: 30,
    marginLeft: -40,
  },
  txtWelcome: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 32,
    lineHeight: 48,
    color: colors.semiBlack,
    marginBottom: 24,
  },
  txtInput2: {
    marginTop: 16,
    marginBottom: 24,
  },
  signIn: {
    backgroundColor: colors.classicBlue,
  },
  viewFaceId: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.secondBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  signInView: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgotPasswordView: {
    marginTop: 24,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  txtForgotPassword: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
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
    marginTop: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.pageBackGround,
  },
  facebook: {
    marginTop: 22,
  },
  google: {
    backgroundColor: colors.secondRed,
    marginTop: 24,
  },
  signUpView: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingTop: 8,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  txtSignUp: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  contentContainerStyle: {
    paddingTop: 20,
  },
});
