import React, { memo } from "react";
import { ScaledSheet } from "react-native-size-matters";

import { Text, View, TouchableOpacity } from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";

const ConditionIndexItem = memo((props) => {
  const { style, title, time, Svg, parameter, unitOfMeasure, onPress } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.flexRow}>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <Text style={styles.txtTime}>{time}</Text>
      <Text style={styles.txtParameter}>
        {parameter}
        <Text style={styles.txtUnitOfMeasure}>{unitOfMeasure}</Text>
      </Text>
      {Svg && (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.svgView}
        >
          {Svg}
        </TouchableOpacity>
      )}
    </View>
  );
});

export default ConditionIndexItem;

const styles = ScaledSheet.create({
  container: {
    width: "50%",
    paddingHorizontal: 24,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.regular,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    textTransform: "uppercase",
    color: colors.semiBlack,
    marginTop: 24,
  },
  txtParameter: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25,
    color: colors.semiBlack,
  },
  txtUnitOfMeasure: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25,
    color: colors.semiBlack,
  },
  svgView: {
    backgroundColor: colors.secondBlue,
    borderRadius: 8,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 26,
    right: 16,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
    marginBottom: 9,
    marginTop: 10,
  },
});
