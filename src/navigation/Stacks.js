import React, { memo } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import ForgotPassword from "@screens/ForgotPassword";
import kids from "@screens/Kids";
import KidProfile from "@screens/Kids/KidProfile";
import AddKid from "@screens/Kids/AddKid";
import EditKid from "@screens/Kids/EditKid";
import { useSelector } from "react-redux";
import SvgAdd from "@svgs/CreateAccount/SvgAdd";

import DashBoard from "@screens/DashBoard";

import DrawerNavigator from "@navigation/DrawerNavigator";
import PersonalInfo from "@screens/Kids/KidProfile/PersonalInfo";

const Stacks = memo(() => {
  const isLoggedIn = useSelector((state) => state.parent.isLoggedIn); // Accessing isLoggedIn state

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          headerMode={"screen"}
          initialRouteName={ROUTES.DrawerNavigator}
        >
          <Stack.Screen
            name={ROUTES.DrawerNavigator}
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.KidProfile}
            component={KidProfile}
            
            options={{ headerShown: false }}
          />
           <Stack.Screen
          name={ROUTES.AddKid}
          component={AddKid}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ROUTES.EditKid}
          component={EditKid}
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
            name={ROUTES.Kids}
            component={kids}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={"Your Kids"} />,
              headerLeft: () => <ButtonHeader />,
              headerRight: () => (
                <ButtonHeader
                children={<SvgAdd width={15} height={15} />}
                  onPress={() => {
                    navigation.navigate(ROUTES.AddKid);
                  }}
                />
              ),
              headerBackground: () => <HeaderBackGround />,
            })}
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
      ) : (
        <Stack.Navigator headerMode={"screen"} initialRouteName={ROUTES.SignIn}>
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
            name={ROUTES.ForgotPassword}
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
});

export default Stacks;
