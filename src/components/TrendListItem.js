import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import colors from "@utils/colors";
import FONTS from "@utils/fonts";

const TrendListItem = (props) => {
  const { img, title, date, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}
    >
      <Image source={img} style={styles.img} />
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtHealthy}>Healthy</Text>
      <Text style={styles.txtDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default TrendListItem;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: 16,
    paddingLeft: 105,
    paddingRight: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginBottom: 16,
    height: 104,
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 17,
    position: "absolute",
    top: 16,
    left: 16,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25,
    color: colors.semiBlack,
    marginBottom: 16,
  },
  txtHealthy: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
    color: colors.classicBlue,
    position: "absolute",
    left: 112,
    bottom: 14,
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
    color: colors.silverChalice,
    position: "absolute",
    right: 30,
    bottom: 15,
  },
});
