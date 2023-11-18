import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContainerProps extends ViewProps {
  paddingTop?: boolean;
  paddingBottom?: boolean;
  useSafeArea?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  paddingTop = true,
  paddingBottom = true,
  useSafeArea = false,
  ...props
}) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={[
        { flex: 1 },
        paddingTop && { paddingTop: top },
        paddingBottom && { paddingBottom: bottom },
        useSafeArea && { paddingTop: top, paddingBottom: bottom },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
