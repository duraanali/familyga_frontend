import React, { memo, useCallback, useEffect, useState } from "react";
import { View, FlatList, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import KidItem from "@components/KidItem";
import keyExtractor from "@utils/keyExtractor";
import SvgAdd from "@svgs/CreateAccount/SvgAdd";
import ROUTES from "@utils/routes";
import { ConfirmDialog } from "react-native-simple-dialogs";
import FONTS from "@utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux';
import { useFetchKidsQuery } from "../../store/slices/KidSlice";
import LoadingScreen from "@components/LoadingScreen";
import EmptyData from "@components/EmptyData";

const Kids = memo(() => {
  const { navigate } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [listDoctorsData, setListDoctorsData] = useState();
  const { data: kids, error, isLoading, refetch  } = useFetchKidsQuery();

  useEffect(() => {
    refetch();
    if (kids) {
      setListDoctorsData(kids.children);
    }
   refetch();
  }, [isLoading, kids]);

  const onKidProfile = useCallback((childData) => {
    navigate(ROUTES.KidProfile, { childData });
  }, []);

  const onCallDoctor = useCallback(() => {
    navigate(ROUTES.CallDoctor);
  }, []);

  const onDoctorMessage = useCallback(() => {
    navigate(ROUTES.DoctorMessage);
  }, []);

  const ondoctor = useCallback(() => {
    navigate(ROUTES.MapsDoctors);
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const {
        image,
        name,
        dob,
        school,
        teacher,
        rating,
        doctor,
        childrenAndTeachers,
        childrenAndDoctors
      } = item;
      return (
        <KidItem
          // activeRemove={true}
          image={image}
          name={name}
          dob={dob}
            school={school}
            childrenAndTeachers={childrenAndTeachers}
          rating={rating}
          childrenAndDoctors={childrenAndDoctors}
          // onRemove={() => setVisible(!visible)}
          onPress={() => onKidProfile(item)}
          onCall={onCallDoctor}
          onMessage={onDoctorMessage}
          ondoctor={ondoctor}
        />
      );
    },
    [onKidProfile, onDoctorMessage, onCallDoctor]
  );

  return (
    <View style={styles.container}>
     {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
        {(!listDoctorsData || listDoctorsData.length === 0) ? (
          <EmptyData message="Oh no! You haven't added kids yet!" route={ROUTES.AddKid} buttonTitle="Add Kid" />
        ) : (
          <FlatList
            data={listDoctorsData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.contentContainerStyle,
              { paddingTop: top - 20, paddingBottom: bottom + 230 },
            ]}
          />
          
        )}
        </>
      )}
   
    </View>
  );
});
export default Kids;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingRight: 24,
  },
  txtTitleAlert: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 29,
    color: colors.semiBlack,
  },
  dialogStyle: {
    width: 340,
    height: 190,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.1,
  },
  messageStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginHorizontal: 50,
  },
  txtPositiveButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    color: colors.classicBlue,
    textAlign: "center",
  },
  txtNegativeButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  negativeButton: {
    backgroundColor: colors.classicBlue,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  positiveButton: {
    backgroundColor: colors.white,
    height: 55,
  },
});
