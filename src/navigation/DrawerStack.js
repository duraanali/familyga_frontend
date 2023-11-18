import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import MainBottomTab from "@navigation/MainBottomTab";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const Stack = createStackNavigator();

const DrawerStack = memo(() => {
  const isOpen = useIsDrawerOpen();
  const progress = useDerivedValue(() => {
    return isOpen ? withTiming(1) : withTiming(0);
  }, [isOpen]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.7]);
    return {
      transform: [{ scale: scale }],
      flex: 1,
    };
  });

  return (
    <Animated.View style={style}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name={ROUTES.MainBottomTab}
          component={MainBottomTab}
        />
      </Stack.Navigator>
    </Animated.View>
  );
});

export default DrawerStack;

const styles = StyleSheet.create({
  drawerStack: {
    flex: 1,
  },
});
