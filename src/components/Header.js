import React, { memo, useCallback, useEffect } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import colors from "@utils/colors";

import FONTS from "@utils/fonts";
import SvgLeftArrow from "@svgs/SvgLeftArrow";

const Header = memo((props) => {
  const { scrollY, opacity, title, svg, svgGoBack, onPress } = props;
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const opacityAnim = scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 1],
  });
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Animated.View style={[styles.headerStyle, { opacity: opacityAnim }]}>
      {svgGoBack && (
        <TouchableOpacity onPress={onBack} style={styles.headerLeftIcon}>
          <SvgLeftArrow />
        </TouchableOpacity>
      )}
      <Animated.Text
        style={[
          styles.headerTitle,
          {
            opacity: opacity ? 1 : headerTitleOpacity,
          },
        ]}
      >
        {title}
      </Animated.Text>
      <TouchableOpacity onPress={onPress} style={styles.headerRightIcon}>
        {svg}
      </TouchableOpacity>
    </Animated.View>
  );
});
export default Header;
const styles = StyleSheet.create({
  headerLeftIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    top: Platform.OS === "ios" ? getStatusBarHeight() + 10 : 16,
    left: 0,
  },
  headerRightIcon: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  headerStyle: {
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() + 34 : 34,
    width: "100%",
    flexDirection: "row",
    zIndex: 100,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: colors.classicBlue,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    color: colors.white,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 24,
    marginTop: Platform.OS === "ios" ? -8 : 0,
  },
});
