import React, { memo, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgHeart from "@svgs/SignIn/SvgHeart";
import FONTS from "@utils/fonts/index";
import SvgUser from "@svgs/SignIn/SvgUser";
import SvgLock from "@svgs/SignIn/SvgLock";
import ROUTES from "@utils/routes";
import ButtonPrimary from "@components/ButtonPrimary";
import TextInputHealer from "@components/TextInputHealer";
import { useNavigation } from "@react-navigation/native";
import HideWithKeyboard from "@components/HideWithKeyboard";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../store/slices/AuthSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCredentials } from "../../store/slices/AuthSlice";

import * as yup from "yup";

const SignIn = memo(() => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { bottom } = useSafeAreaInsets();
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "Duraan@gmail.com",
      password: "Allahisone",
    },
  });

  const [loginUser, { data: logginDaa, isSuccess, isError, error }] =
    useLoginUserMutation();

  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  const handleLogin = async (userData) => {
    try {
      setIsLoading(true); // Set loading state to true
      const result = await loginUser(userData).unwrap(); // This unwraps the result to handle it directly

      if (result.family_parent_token) {
        await AsyncStorage.setItem("token", result.family_parent_token);
        dispatch(
          setCredentials({ family_parent_token: result.family_parent_token })
        );
        setIsLoading(false); // Set loading state to false
      }
    } catch (error) {
      setIsLoading(false); // Set loading state to false
      setLoginError(error.data.message);
      console.error("Login failed:", error);
      // Handle error state in the UI, such as showing an error message
    }
  };

  const onFaceBook = useCallback(() => {}, []);

  const onGoogle = useCallback(() => {}, []);

  const onSignUp = useCallback(() => {
    navigate(ROUTES.SignUp);
  }, []);

  return (
    <Container style={styles.container}>
      {isLoading ? ( 
        <ActivityIndicator
          size="large"
          color={colors.blue}
          style={styles.indicator}
        /> 
      ) : (
        <>
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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputHealer
                  style={styles.txtInput1}
                  svg={<SvgUser />}
                  placeholder={"Email"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.email && (
              <Text style={styles.emailerror}>{errors.email.message}</Text>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputHealer
                  style={styles.txtInput2}
                  svg={<SvgLock />}
                  placeholder={"Password"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password && (
              <Text style={styles.passworderror}>
                {errors.password.message}
              </Text>
            )}
            {loginError !== "" && (
              <Text style={styles.loginError}>{loginError}</Text>
            )}
            <View style={styles.signInView}>
              <ButtonPrimary
                onPress={handleSubmit(handleLogin)}
                style={styles.signIn}
                title={"Sign In"}
              />
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.forgotPasswordView}
            >
              <Text style={styles.txtForgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
        </TouchableOpacity>
          </KeyboardAwareScrollView>
        </>
      )}
      {/* <HideWithKeyboard
        style={[styles.signUpView, { paddingBottom: bottom + 50 }]}
      >
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
        </TouchableOpacity>
      </HideWithKeyboard> */}
    </Container>
  );
});

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingTop: "50%",
  },
  svgHeart: {
    marginTop: 12,
    marginBottom: 8,
  },
  passworderror: {
    color: "red",
    fontSize: "14@s",
    marginLeft: "15@s",
    marginBottom: "10@s",
    marginTop: "-15@s",
  },
  emailerror: {
    color: "red",
    fontSize: "14@s",
    marginLeft: "15@s",
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
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
  loginError: {
    color: "red",
    fontSize: "14@s",
    marginBottom: "15@s",
    textAlign: "center",
  },
  signIn: {
    backgroundColor: colors.classicBlue,
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

  signUpView: {
    right: 0,
    left: 0,
    bottom: 100,
    paddingBottom: 100,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  txtSignUp: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
    marginTop: 24,
    alignSelf: "center",
  },
  contentContainerStyle: {
    paddingTop: 20,
  },
});
