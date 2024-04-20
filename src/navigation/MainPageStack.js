import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import MainPage from "@screens/MainPage";
import SvgMenu from "@svgs/SvgMenu";
import SvgNotification from "@svgs/SvgNotification";
import SvgCarer from "@svgs/SvgCarer";
import colors from "@utils/colors";

const Stack = createStackNavigator();

const MainPageStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MainPage}
        component={MainPage}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          
          headerTitle: () => (
            <HeaderTitle children={<SvgCarer color={colors.white} />} />
          ),
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              children={<SvgNotification />}
              onPress={() => {
                navigation.navigate(ROUTES.Notification);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default MainPageStack;
