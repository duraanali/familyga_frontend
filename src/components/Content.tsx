import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";

interface ContentProps extends ScrollViewProps {}

const Content: React.FC<ContentProps> = ({
  style,
  contentContainerStyle,
  children,
  ...props
}) => {
  return (
    <ScrollView
      {...props}
      style={style}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
};

export default Content;
