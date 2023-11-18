import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgHoverLine from "@svgs/Menu/SvgHoverLine";

const DrawerItem = (props) => {
  const { onPress, label, tabChose, tabActive } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.drawerLabel}>{label}</Text>
      <SvgHoverLine
        tabChose={tabChose}
        tabActive={tabActive}
        style={styles.svgHoverLine}
      />
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: "center",
    height: 50,
    paddingLeft: 40,
  },
  drawerLabel: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  svgHoverLine: {
    position: "absolute",
    left: 0,
  },
});
