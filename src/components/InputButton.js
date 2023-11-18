import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";

const InputButton = (props) => {
  const { onPress, title, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.textInputHealer, style]}
    >
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default InputButton;

const styles = ScaledSheet.create({
  textInputHealer: {
    flex: 1,
    height: 48,
    maxHeight: 48,
    backgroundColor: colors.frame,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.silverChalice,
    marginLeft: 16,
  },
});
