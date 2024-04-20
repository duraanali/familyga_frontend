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
import DrawerNavigator from "@navigation/DrawerNavigator";
import PersonalInfo from "@screens/Kids/KidProfile/PersonalInfo";
import Hospitals from "@screens/Hospitals";
import AddHospital from "@screens/Hospitals/AddHospital";
import EditHospital from "@screens/Hospitals/EditHospital";
import EditSchool from "@screens/Schools/EditSchool";
import AddSchool from "@screens/Schools/AddSchool";
import Schools from "@screens/Schools";
import Doctors from "@screens/Doctors";
import AddDoctor from "@screens/Doctors/AddDoctor";
import EditDoctor from "@screens/Doctors/EditDoctor";
import Teachers from "@screens/Teachers";
import AddTeacher from "@screens/Teachers/AddTeacher";
import EditTeacher from "@screens/Teachers/EditTeacher";

const Stacks = memo(() => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
            name={ROUTES.AddHospital}
            component={AddHospital}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.AddSchool}
            component={AddSchool}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.AddTeacher}
            component={AddTeacher}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name={ROUTES.EditTeacher}
            component={EditTeacher}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.EditKid}
            component={EditKid}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.EditHospital}
            component={EditHospital}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.EditSchool}
            component={EditSchool}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.EditDoctor}
            component={EditDoctor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.AddDoctor}
            component={AddDoctor}
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
            name={ROUTES.Doctors}
            component={Doctors}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={"Doctors"} />,
              headerLeft: () => <ButtonHeader />,
              headerRight: () => (
                <ButtonHeader
                  children={<SvgAdd width={15} height={15} />}
                  onPress={() => {
                    navigation.navigate(ROUTES.AddDoctor);
                  }}
                />
              ),
              headerBackground: () => <HeaderBackGround />,
            })}
          />
          <Stack.Screen
            name={ROUTES.Hospitals}
            component={Hospitals}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={"Hospitals"} />,
              headerLeft: () => <ButtonHeader />,
              headerRight: () => (
                <ButtonHeader
                  children={<SvgAdd width={15} height={15} />}
                  onPress={() => {
                    navigation.navigate(ROUTES.AddHospital);
                  }}
                />
              ),
              headerBackground: () => <HeaderBackGround />,
            })}
          />
          <Stack.Screen
            name={ROUTES.Schools}
            component={Schools}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={"Schools"} />,
              headerLeft: () => <ButtonHeader />,
              headerRight: () => (
                <ButtonHeader
                  children={<SvgAdd width={15} height={15} />}
                  onPress={() => {
                    navigation.navigate(ROUTES.AddSchool);
                  }}
                />
              ),
              headerBackground: () => <HeaderBackGround />,
            })}
          />
          <Stack.Screen
            name={ROUTES.Teachers}
            component={Teachers}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={"Teachers"} />,
              headerLeft: () => <ButtonHeader />,
              headerRight: () => (
                <ButtonHeader
                  children={<SvgAdd width={15} height={15} />}
                  onPress={() => {
                    navigation.navigate(ROUTES.AddTeacher);
                  }}
                />
              ),
              headerBackground: () => <HeaderBackGround />,
            })}
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
