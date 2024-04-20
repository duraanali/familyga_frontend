import React, { memo } from "react";
import { View, Platform,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ROUTES from "@utils/routes";
import SvgIndicatorInactive from "@svgs/MainBottomTab/SvgIndicatorInactive";
import SvgStethoscopeInactive from "@svgs/MainBottomTab/SvgStethoscopeInactive";
import colors from "@utils/colors";
import SvgDoctorInactive from "@svgs/MainBottomTab/SvgDoctorInactive";
import SvgDrugInactive from "@svgs/MainBottomTab/SvgDrugInactive";
import SvgUserProfileInactive from "@svgs/MainBottomTab/SvgUserProfileInactive";
import MainPageStack from "@navigation/MainPageStack";
import { getBottomSpace } from "react-native-iphone-x-helper";

const Tab = createBottomTabNavigator();

const MainBottomTab = memo(() => {
  return (
    <Tab.Navigator
    initialRouteName={ROUTES.MainPageBottomTab}
    screenOptions={{
      headerShown: false, // This will hide the header for all tab screens
      style: styles.tabBarOptions,
      showLabel: false,
      activeTintColor: colors.classicBlue,
      inactiveTintColor: colors.silverChalice,
    }}
  >
     
    
      <Tab.Screen
        name={ROUTES.MainPageBottomTab}
        component={MainPageStack}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.viewTabBarIcon}>
              <SvgStethoscopeInactive color={color} />
            </View>
          ),
        }}
      />
   
   
    </Tab.Navigator>
  );
});
export default MainBottomTab;

const styles = StyleSheet.create({
  viewTabBarIcon: {
    backgroundColor: colors.classicBlue,
    borderWidth: 4,
    borderColor: colors.pageBackGround,
    height: 56,
    width: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? getBottomSpace() + -60 : -20,
  },
  tabBarOptions: {
    backgroundColor: colors.white,
    height: getBottomSpace() + 49,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderTopWidth: 0,
    position: "absolute",
    bottom: 0,
  },
});
