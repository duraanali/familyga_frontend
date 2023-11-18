import React, { memo } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

interface Props {
  border?: boolean;
}

const HeaderBackGround = memo(({ border = true }: Props) => {
  return (
    <View
      style={[
        styles.headerBackground,
        border && {
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
      ]}
    />
  );
});

export default HeaderBackGround;

const styles = ScaledSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: colors.classicBlue,
  },
});
