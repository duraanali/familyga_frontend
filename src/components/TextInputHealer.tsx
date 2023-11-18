import React from "react";
import {
  View,
  Text,
  TextInput,
  ViewStyle,
  StyleSheet,
  TextInputProps,
} from "react-native";

import colors from "@utils/colors";
import FONTS from "@utils/fonts";

interface Props extends TextInputProps {
  style?: ViewStyle;
  svg?: any;
  props?: TextInputProps;
}

const TextInputHealer = ({ style, svg, ...props }: Props) => {
  return (
    <View style={[styles.textInputHealer, style]}>
      {svg ? <Text style={styles.svg}>{svg}</Text> : null}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.dimGray}
        {...props}
      />
    </View>
  );
};

export default TextInputHealer;

const styles = StyleSheet.create({
  textInputHealer: {
    flex: 1,
    height: 48,
    maxHeight: 48,
    backgroundColor: colors.frame,
    borderRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  svg: {
    marginLeft: 16,
  },
  input: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginLeft: 16,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.semiBlack,
  },
});
