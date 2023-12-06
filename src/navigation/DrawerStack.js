import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import ROUTES from "@utils/routes";
import MainBottomTab from "@navigation/MainBottomTab";
import { useDrawerStatus } from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const Stack = createStackNavigator();

const DrawerStack = memo(() => {
  const isOpen = useDrawerStatus() === 'open';
  const progress = useDerivedValue(() => {
    return isOpen ? withTiming(1) : withTiming(0);
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]); // Adjusted for better visibility
    return {
      transform: [{ scale }],
    };
  });

  // Wrap your Animated.View in a SafeAreaView to prevent overlap with status bar and navigation bar
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={ROUTES.MainBottomTab}
            component={MainBottomTab}
          />
        </Stack.Navigator>
      </Animated.View>
    </SafeAreaView>
  );
});

export default DrawerStack;
