import React, { memo, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgBackArrow from "@svgs/SvgBackArrow";

const ButtonHeader = memo((props) => {
  const { children, onPress } = props;
  const navigation = useNavigation();

  const onPressButton = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  }, [navigation, props]);
  const btnStyle = {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <TouchableOpacity style={btnStyle} onPress={onPressButton}>
      {children ? children : <SvgBackArrow width={15} height={15} />}
    </TouchableOpacity>
  );
});
export default ButtonHeader;
