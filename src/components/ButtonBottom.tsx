import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "@utils/colors/index";
import FONTS from "@utils/fonts/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends TouchableOpacityProps {
  style?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
}

const ButtonBottom = ({ style, titleStyle, title, ...props }: Props) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom + 24 }, style]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonPrimacy}
        {...props}
      >
        <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBottom;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 40,
    right: 0,
    left: 0,
  },
  buttonPrimacy: {
    flex: 1,
    height: 48,
    maxHeight: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.classicBlue,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.white,
  },
});
