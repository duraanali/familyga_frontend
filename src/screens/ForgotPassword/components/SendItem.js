import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";

const SendItem = (props) => {
  const { style, title, icon, description, content, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.sendItem, style]}
    >
      <View style={styles.titleView}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text>{icon}</Text>
      </View>
      <Text style={styles.txtDescription}>
        {description}
        <Text style={styles.txtContent}>{content}</Text>
      </Text>
    </TouchableOpacity>
  );
};
export default SendItem;

const styles = ScaledSheet.create({
  sendItem: {
    backgroundColor: colors.frame,
    borderRadius: 16,
  },
  titleView: {
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 28,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    color: colors.bluePrimary,
    fontSize: 12,
    textTransform: "uppercase",
    marginRight: 4,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.silverChalice,
    marginTop: 9,
    marginLeft: 24,
    marginBottom: 23,
  },
  txtContent: {
    marginLeft: 24,
    lineHeight: 20,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.semiBlack,
  },
});
