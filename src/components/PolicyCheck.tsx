import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import colors from "@utils/colors";
import { Images } from "@assets/index";

interface Props extends TouchableOpacityProps {
  check?: boolean;
  style?: ViewStyle;
}

const PolicyCheck = ({ check, style, ...props }: Props) => {
  const onPolicy = () => {
    WebBrowser.openBrowserAsync("https://timivietnam.github.io/carer/policy");
  };

  const onTerm = () => {
    WebBrowser.openBrowserAsync("https://timivietnam.github.io/carer/term");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      {...props}
    >
      <View
        style={[
          styles.checkbox,
          {
            backgroundColor: check ? colors.blue : colors.white,
            borderColor: check ? colors.blue : colors.brown,
          },
        ]}
      >
        <Image
          style={[styles.checkImage, { tintColor: colors.white }]}
          source={Images.check}
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.text}>I Agree to </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onPolicy}>
          <Text style={styles.policyText}>Policy</Text>
        </TouchableOpacity>
        <Text style={styles.text}> And </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onTerm}>
          <Text style={styles.policyText}>Terms</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PolicyCheck;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  checkbox: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  checkImage: {
    width: 16,
    height: 12,
  },
  policyText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: colors.blue,
  },
  text: {},
});
