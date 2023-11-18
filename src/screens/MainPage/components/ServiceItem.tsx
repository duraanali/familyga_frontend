import React from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";

interface ServiceItem {
  item: {
    svg: any;
    title: string;
    content: string;
  };
  onPress?(): void;
  style?: ViewStyle;
}

const ServiceItem: React.FC<ServiceItem> = ({ item, onPress, style }) => {
  const { svg, title, content } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.serviceItem, style]}
    >
      <View style={styles.svgView}>{svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtContent}>{content}</Text>
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = ScaledSheet.create({
  serviceItem: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    flex: 1,
  },
  svgView: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.frame,
    marginTop: 14,
    marginLeft: 16,
    marginBottom: 39,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    color: colors.oldBurgundy,
    textTransform: "capitalize",
    marginLeft: 16,
  },
  txtContent: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.silverChalice,
    textTransform: "capitalize",
    marginLeft: 16,
    marginBottom: 17,
    marginTop: 3,
  },
});
