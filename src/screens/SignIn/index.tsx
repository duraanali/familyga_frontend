import React, { memo, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
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
import { useForm, Controller } from "react-hook-form";
import useToggle from "@hooks/useToggle";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/ParentSlice";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignIn = memo(() => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { bottom } = useSafeAreaInsets();
  
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  

  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.parent);

  const onSignIn = useCallback((data) => {
    setIsLoading(true); // Start loading
   console.log("LOGIN DATA", data)
    dispatch(loginUser(data)).then((res) => {
      console.log("RES", res)
      
    }, (error) => {
      console.log("ERROR", error)
    }
    );

    setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 3000);
    
    
  }, [dispatch, isLoggedIn]);

  const onFaceBook = useCallback(() => {}, []);

  const onGoogle = useCallback(() => {}, []);

  const onSignUp = useCallback(() => {
    navigate(ROUTES.SignUp);
  }, []);


  return (
    <Container style={styles.container}>
       {isLoading ? ( // If loading state is true, show loading indicator
        <ActivityIndicator size="large" color={colors.blue} style={styles.indicator}/> // Loading indicator
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
      {errors.email && <Text style={styles.emailerror}>{errors.email.message}</Text>}
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
      {errors.password && <Text style={styles.passworderror}>{errors.password.message}</Text>}
        {/* <PolicyCheck check={check} onPress={setCheck} /> */}
        <View style={styles.signInView}>
          <ButtonPrimary
            onPress={handleSubmit(onSignIn)}
            style={styles.signIn}
            title={"Sign In"}
            // disable={!check}
          />
          {/* <TouchableOpacity activeOpacity={0.7} style={styles.viewFaceId}>
            <SvgFaceID />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          onPress={onSignIn}
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
          onPress={onFaceBook}
          style={styles.facebook}
          title={"Sign In With Facebook"}
        />
        <ButtonPrimary
          onPress={onGoogle}
          style={styles.google}
          title={"Sign In With Google"}
        />
      </KeyboardAwareScrollView>
      </>
      )}
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
  passworderror: {
    color: 'red',
    fontSize: '14@s',
    marginLeft: '15@s',
    marginBottom: '10@s',
    marginTop: '-15@s',
  },
  emailerror: {
    color: 'red',
    fontSize: '14@s',
    marginLeft: '15@s',
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
