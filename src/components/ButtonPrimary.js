import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "@utils/colors/index";
import FONTS from "@utils/fonts/index";

const ButtonPrimary = (props) => {
  const { style, title, titleStyle, onPress, disable } = props;
  return (
    <TouchableOpacity
      disable={disable}
      activeOpacity={disable ? 1 : 0.7}
      onPress={onPress}
      style={[
        styles.buttonPrimacy,
        { backgroundColor: colors.classicBlue },
        style,
        disable && { backgroundColor: colors.brown },
      ]}
    >
      <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonPrimacy: {
    height: 48,
    maxHeight: 48,
    flex: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.white,
  },
});
