import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgArrowDown from "@svgs/AddDrugs/SvgArrowDown";

const DropInput = memo((props) => {
  const { title, onPress, style, nonArrow } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, style]}
    >
      <Text style={styles.txtTitle}>{title}</Text>
      {nonArrow ? null : <SvgArrowDown style={styles.svgArrowDown} />}
    </TouchableOpacity>
  );
});

export default DropInput;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    height: 48,
    paddingLeft: 22,
    paddingVertical: 12,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.line,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.dimGray,
    textTransform: "capitalize",
  },
  svgArrowDown: {
    position: "absolute",
    right: 24,
  },
});
