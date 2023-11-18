import React, { memo, useCallback, useState } from "react";
import { View, FlatList, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import KidItem from "@components/KidItem";
import keyExtractor from "@utils/keyExtractor";

import ROUTES from "@utils/routes";
import { ConfirmDialog } from "react-native-simple-dialogs";
import FONTS from "@utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LIST_KIDS_DATA = [
  {
    imgDoctor: require("@assets/ResultFindDoctor/01.png"),
    kidName: "Uthmaan Ahmed",
    dob: "04/16/2014",
    doctor: "Dr. Jose Holland",
    school: "St. Joseph High School",
    teacher: "Ms. Jane Doe",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/02.png"),
    kidName: "Nasteexo Ahmed",
    dob: "08/23/2017",
    doctor: "Dr. Jose Holland",
    school: "St. Joseph High School",
    teacher: "Ms. Jane Doe",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/03.png"),
    kidName: "Dahabo Ahmed",
    dob: "06/21/2020",
    doctor: "Dr. Jose Holland",
    school: "St. Joseph High School",
    teacher: "Ms. Jane Doe",
  },

];

const Kids = memo(() => {
  const { navigate } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [listDoctorsData, setListDoctorsData] = useState(LIST_KIDS_DATA);
  const [visible, setVisible] = useState(false);

  const onTouchOutside = useCallback(() => {
    setVisible(false);
  }, []);

  const onKidProfile = useCallback(() => {
    navigate(ROUTES.KidProfile);
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
        imgDoctor,
        kidName,
        dob,
        school,
        teacher,
        rating,
        doctor,
      } = item;
      return (
        <KidItem
          activeRemove={true}
          imgDoctor={imgDoctor}
          kidName={kidName}
          dob={dob}
            school={school}
            teacher={teacher}
          rating={rating}
          doctor={doctor}
          onRemove={() => setVisible(!visible)}
          onPress={onKidProfile}
          onCall={onCallDoctor}
          onMessage={onDoctorMessage}
          ondoctor={ondoctor}
        />
      );
    },
    [onKidProfile, onDoctorMessage, onCallDoctor, visible]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listDoctorsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { top: top - 20, paddingBottom: bottom + 230 },
        ]}
      />
      <ConfirmDialog
        dialogStyle={styles.dialogStyle}
        title="Delete Doctor"
        message="Do you want delete doctor
        Jose Holland on list?"
        visible={visible}
        messageStyle={styles.messageStyle}
        onTouchOutside={onTouchOutside}
        positiveButton={{
          title: "Done",
          onPress: () => setVisible(false),
          style: styles.positiveButton,
          titleStyle: styles.txtPositiveButton,
        }}
        negativeButton={{
          title: "Cancel",
          onPress: () => setVisible(false),
          style: styles.negativeButton,
          titleStyle: styles.txtNegativeButton,
        }}
      />
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
