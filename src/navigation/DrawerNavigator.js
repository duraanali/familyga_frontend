import React, { memo, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import ROUTES from "@utils/routes";
import DrawerStack from "@navigation/DrawerStack";
import colors from "@utils/colors";
import { CommonActions } from "@react-navigation/native";

import SvgAvatar from "@svgs/Menu/SvgAvatar";
import FONTS from "@utils/fonts";
import DrawerItem from "@components/DrawerItem";
import useLayout from "@hooks/useLayout";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { useLogoutUserMutation } from "../store/slices/AuthSlice";
import {fetchParent} from "../store/slices/ParentSlice"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearCredentials, logOut } from "../store/slices/AuthSlice";
import { persistor } from "../store";
const Drawer = createDrawerNavigator();

const SCREENS = [
  { id: 0, label: "Home" },
  { id: 1, label: "Kids" },
  { id: 2, label: "Appointments" },
  { id: 3, label: "Hospitals" },
  { id: 4, label: "Schools" },
  { id: 5, label: "Doctors" },
  { id: 6, label: "Teachers" },
  { id: 7, label: "To Do" },
  { id: 8, label: "Profile" },
  { id: 9, label: "Log out" },
];

const DrawerNavigator = memo(() => {
  const { bottom } = useLayout();
  const [user, setUser] = useState({});
  const [tabActive, setTabActive] = useState(0);
  const dispatch = useDispatch(); // Create dispatch object

  // const parent = useSelector((state) => state.parent); // Accessing parent state
  // console.log("parent NAVB", parent);
  const parent = useSelector((state) => state.parent.parent); // Accessing parent state
  useEffect(() => {
    dispatch(fetchParent());
    
  }, [dispatch]);

  useEffect(() => {
    if (parent) {
      setUser({
        avatar: require("@assets/Menu/Avatar.png"),
        userName: parent.name,
      });
    }
  }, [parent]);

  const removeAppKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      const token = await AsyncStorage.getItem("token");
      await AsyncStorage.multiRemove(keys);
      await AsyncStorage.removeItem("token");
      
    } catch (e) {
      console.log(e);
    }
    console.log("Done");
  };



  const handleLogout = async (props) => {
    try {
      dispatch(logOut()); // Call the logout action
      await AsyncStorage.removeItem('token');
       persistor.purge();
     // Navigate to the sign-in screen
     props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ROUTES.SignIn }],
      })
    );
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error state in the UI, such as showing an error message
    }
  };

  const onNavigate = (key, props) => {
    if (key === 9) {
      handleLogout(props);
      return;
    }

    switch (key) {
      case 0:
        props.navigation.navigate(ROUTES.MainPageBottomTab);
        break;
      case 1:
        props.navigation.navigate(ROUTES.Kids);
        break;
      case 2:
        props.navigation.navigate(ROUTES.BookAppointment);
        break;
      case 3:
        props.navigation.navigate(ROUTES.Hospitals);
        break;
      case 4:
        props.navigation.navigate(ROUTES.Schools);
        break;
      case 5:
        props.navigation.navigate(ROUTES.Doctors);
        break;
      case 6:
        props.navigation.navigate(ROUTES.Teachers);
        break;
      case 7:
        props.navigation.navigate(ROUTES.ToDo);
        break;
      case 8:
        props.navigation.navigate(ROUTES.UserProfile);
        break;
      case 9:
        props.navigation.navigate(ROUTES.Logout);
        break;
      default:
        break;
    }
  };

  const DrawerContent = (props) => {
    return (
      <DrawerContentScrollView
        {...props}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ROUTES.UserProfileBottomTab);
          }}
          activeOpacity={0.7}
          style={styles.avatar}
        >
          <SvgAvatar />
        </TouchableOpacity>
        <Text style={styles.txtName}>{user.userName}</Text>
        {SCREENS.map((item, index) => {
          const { id, label } = item;
          return (
            <DrawerItem
              key={index}
              tabChose={id}
              tabActive={tabActive}
              label={label}
              onPress={() => {
                setTabActive(id);
                onNavigate(id, props);
              }}
            />
          );
        })}
      </DrawerContentScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName={ROUTES.MainPage}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.contentContainerDrawer}
        screenOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
          headerShown: false,
        }}
        sceneContainerStyle={styles.sceneContainerStyle}
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name={ROUTES.DrawerStack}>
          {(props) => <DrawerStack {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
});
export default DrawerNavigator;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  drawerStyles: {
    flex: 1,
    width: "70%",
    backgroundColor: "transparent",
  },
  drawerItem: {
    alignItems: "flex-start",
    marginBottom: 10,
  },
  drawerLabel: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  contentContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtName: {
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "600",
    color: colors.black1,
    fontFamily: FONTS.HIND.SemiBold,
    textTransform: "uppercase",
    marginTop: 9,
    letterSpacing: 0.5,
    marginLeft: 40,
    marginBottom: 44,
  },
  svgHoverLine: {
    position: "absolute",
    left: 0,
  },
  avatar: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    backgroundColor: colors.classicBlue,
    marginLeft: 40,
    marginTop: 40,
  },
  contentContainerDrawer: {
    flex: 1,
  },
  sceneContainerStyle: {
    backgroundColor: "transparent",
  },
});
