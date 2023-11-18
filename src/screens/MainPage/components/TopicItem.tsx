import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";

interface TopicItem {
  item: {
    svg: any;
    title: string;
    color: string;
  };

  style?: ViewStyle;
}

const TopicItem: React.FC<TopicItem> = ({ item, style }) => {
  const { color, svg, title } = item;
  return (
    <View style={[styles.topicItem, { backgroundColor: color }, style]}>
      <View style={styles.svg}>{svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
};
export default TopicItem;

const styles = ScaledSheet.create({
  topicItem: {
    width: 280,
    height: 130,
    marginRight: 16,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    left: 16,
    marginTop: 16,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: 21,
    lineHeight: 25,
    color: colors.white,
    marginRight: 16,
    textAlign: "center",
  },
});
