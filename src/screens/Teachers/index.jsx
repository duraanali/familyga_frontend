import React, { memo, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";
import TeacherItem from "@components/TeacherItem";
import keyExtractor from "@utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useFetchTeachersQuery } from "../../store/slices/TeacherSlice";
import LoadingScreen from "@components/LoadingScreen";
import EmptyData from "@components/EmptyData";
import ROUTES from "@utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDeleteTeacherMutation } from "../../store/slices/TeacherSlice";


const Teachers = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const {
    data: teachers,
    error,
    isLoading,
    refetch,
  } = useFetchTeachersQuery();
  const [deleteTeacher] = useDeleteTeacherMutation();
  const [listTeachers, setListTeachers] = useState([]);

  useEffect(() => {
    refetch();
    if (teachers) {
      setListTeachers(teachers.teachers);
    }
    refetch();
  }, [isLoading, teachers]);

  const onDeleteTeacher = useCallback((id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteTeacher(id);
            refetch();
          },
        },
      ],
      { cancelable: false }
    );
  }, []);

  const onEditTeacher = useCallback((item) => {
    navigate(ROUTES.EditTeacher, { item: item });
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const { subject, name, email, phone, id } = item;
      return (
        <TeacherItem
          imgHospital={require("@assets/AppointmentList/Doctor1.png")}
          name={name}
          email={email}
          subject={subject}
          phone={phone}
          onEditTeacher={() => onEditTeacher(item)}
          onDeleteTeacher={() => onDeleteTeacher(id)}
          id={id}
        />
      );
    },
    [onEditTeacher, onDeleteTeacher]
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {!listTeachers || listTeachers.length === 0 ? (
            <EmptyData
              message="Oh no! No Teacher!"
              route={ROUTES.AddTeacher}
              buttonTitle="Add Teacher"
            />
          ) : (
            <FlatList
              data={listTeachers}
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

export default Teachers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
    paddingRight: 24,
  },
  txtFound: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.brown,
    marginBottom: 16,
    marginLeft: 24,
  },
  txtNumberResult: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.black1,
  },
  txtPlace: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.black1,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace(),
  },
});
