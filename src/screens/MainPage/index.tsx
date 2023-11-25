import React, { memo, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import TopicItem from "@screens/MainPage/components/TopicItem";
import SvgNurse from "@svgs/SvgNurse";
import SvgDoctor from "@svgs/MainPage/SvgDoctor";
import SvgHospital from "@svgs/MainPage/SvgHospital";
import SvgCalendar from "@svgs/MainPage/SvgCalendar";
import SvgPoint from "@svgs/MainPage/SvgPoint";
import ServiceItem from "@screens/MainPage/components/ServiceItem";
import ROUTES from "@utils/routes";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import keyExtractor from "@utils/keyExtractor";
import AppointmentListItem from "@components/AppointmentListItem";
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = memo(() => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});
  const parent = useSelector((state) => state.parent);

  const UPCOMING_DATA = [
    {
      description:
        'Dahabo is having a fever. She needs to be checked by a doctor.',
      kidImage: require('@assets/AppointmentList/Doctor.png'),
      kidName: 'Dahabo',
      Type: 'Hospital',
      title: 'ENT Checkup',
      location: '949 Satterfield Fort Suite 520',
      time: 'Fri 22th of Jun, 2:30pm - 3:30pm',
    },
    {
      description:
        'Nasteexo is having hard time in school. We need teacher meeting.',
      kidImage: require('@assets/AppointmentList/Doctor1.png'),
      kidName: 'Nasteexo',
      type: 'School',
      title: 'Teacher Meeting',
      location: '949 Satterfield Fort Suite 520',
      time: 'Mon 26th of Jun, 2:30pm - 3:30pm',
    },
  ];

  const data = [
    {
      id: 2,
      onPress: () => navigate(ROUTES.AppointmentList),
      svg: <SvgCalendar />,
      title: "Appointments",
      content: "2 Coming Up",
    },
    {
      id: 3,
      onPress: () => navigate(ROUTES.PricePlan),
      svg: <SvgPoint />,
      title: "To Do",
      content: "3 Done, 2 Left",
    },
  ];

  // const removeAppKeys = async () => {
  //   let keys = []
  //   try {
  //     keys = await AsyncStorage.getAllKeys()
  //     console.log(`Keys: ${keys}`) // Just to see what's going on
  //     await AsyncStorage.multiRemove(keys)
  //   } catch(e) {
  //    console.log(e)
  //   }
  //   console.log('Done')
  // }


  useEffect(() => {
    // removeAppKeys();
    if (parent && parent.isLoggedIn) {
      setUser(parent.parent.user);
    }
  }, [parent.isLoggedIn]);

  const renderAppointment = React.useCallback(({ item }) => {
    const {
      description,
      kidImage,
      kidName,
      Type,
      rating,
      title,
      location,
      time,
      done,
      cancel,
    } = item;
    return (
      <AppointmentListItem
        description={description}
        kidImage={kidImage}
        kidName={kidName}
        Type={Type}
        title={title}
        location={location}
        time={time}
        done={done}
        cancel={cancel}
        // onCancel={onCancel}
        // onReschedule={onReschedule}
      />
    );
  }, []);


  const renderItem = React.useCallback(({ item, index }) => {
    return (
      <ServiceItem
        style={{
          marginRight: 16,
          marginLeft: index % 2 === 0 ? 16 : 0,
        }}
        item={item}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
       {user && (
        <>
       <Text style={styles.txtHi}>Hi! {user.name}</Text>
        <Text style={styles.txtToday}>How is your day going?</Text>
        </>
        )}
      <FlatList
        data={data || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        numColumns={2}
        contentContainerStyle={{
          paddingTop: 24,
          marginBottom: -90,
        }}
      />
      {UPCOMING_DATA.length > 0 && (
        <>
       <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <FlatList
        data={UPCOMING_DATA || []}
        renderItem={renderAppointment}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerFlatList}
      />
      </>
      )}
    </View>
  );
});
export default MainPage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
    paddingTop: getStatusBarHeight(),
  },
  txtHi: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 38,
    color: colors.semiBlack,
    marginLeft: 24,
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 30,
    color: colors.brown,
    marginLeft: 24,
    marginBottom: 20,
  },
  contentContainerStyle: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  contentContainerFlatList: {
    paddingBottom: 80,
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: getStatusBarHeight() + 55,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 17,
    color: colors.bluePrimary,
  },
  btnClose: {
    position: "absolute",
    bottom: 11,
    left: 16,
  },
  btnOption: {
    position: "absolute",
    bottom: 11,
    right: 16,
  },
  svgCarer: {
    position: "absolute",
    bottom: 11,
  },
  flexWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 20,
    lineHeight: 30,
    color: colors.darkText,
    marginLeft: 24,
    marginBottom: 10,
  }
});
