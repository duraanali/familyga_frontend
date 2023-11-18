import React, { memo } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import SvgNotification from "@svgs/SvgNotification";
import SvgSetting from "@svgs/SvgSetting";
import SvgMap from "@svgs/SvgMap";
import SvgBookMark from "@svgs/SvgBookMark";
import SvgCalendar from "@svgs/SvgCalendar";
import SvgMyHeart from "@svgs/DoctorInformation/SvgMyHeart";
import SvgAdd from "@svgs/SvgAdd";
import SvgSearch from "@svgs/SvgSearch";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import ForgotPassword from "@screens/ForgotPassword";
import kids from "@screens/Kids";
import KidProfile from "@screens/Kids/KidProfile";

import DashBoard from "@screens/DashBoard";

import DrawerNavigator from "@navigation/DrawerNavigator";
import SvgDelete from "@svgs/ForgotPassword/SvgDelete";
import useCachedResources from "@hooks/useCachedResources";
import PersonalInfo from "@screens/Kids/KidProfile/PersonalInfo";

const Main = memo(() => {
  const fontsLoaded = useCachedResources();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"screen"}
        initialRouteName={ROUTES.Kids}
      >
      
        <Stack.Screen
          name={ROUTES.DrawerNavigator}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ROUTES.KidProfile}
          component={KidProfile}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ROUTES.KidInformation}
          component={PersonalInfo}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Kid Information"} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader children={<SvgMyHeart />} onPress={() => {}} />
            // ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ForgotPassword}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ROUTES.Kids}
          component={kids}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Your Kids"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
       
        
        <Stack.Screen
          name={ROUTES.DashBoard}
          component={DashBoard}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"DashBoard"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
