import React, { memo, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";
import DoctorItem from "@components/DoctorItem";
import keyExtractor from "@utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useFetchDoctorsQuery } from "../../store/slices/DoctorSlice";
import LoadingScreen from "@components/LoadingScreen";
import EmptyData from "@components/EmptyData";
import ROUTES from "@utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDeleteDoctorMutation } from "../../store/slices/DoctorSlice";


const Doctors = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const {
    data: doctors,
    error,
    isLoading,
    refetch,
  } = useFetchDoctorsQuery();
  const [deleteDoctor] = useDeleteDoctorMutation();
  const [listDoctors, setListDoctors] = useState([]);

  useEffect(() => {
    refetch();
    if (doctors) {
      setListDoctors(doctors.doctors);
    }
    refetch();
  }, [isLoading, doctors]);

  const onDeleteDoctor = useCallback((id) => {
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
            deleteDoctor(id);
            refetch();
          },
        },
      ],
      { cancelable: false }
    );
  }, []);

  const onEditDoctor = useCallback((item) => {
    navigate(ROUTES.EditDoctor, { item: item });
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const { speciality, name, email, phone, id } = item;
      return (
        <DoctorItem
          imgHospital={require("@assets/AppointmentList/Doctor1.png")}
          name={name}
          email={email}
          speciality={speciality}
          phone={phone}
          onEditDoctor={() => onEditDoctor(item)}
          onDeleteDoctor={() => onDeleteDoctor(id)}
          id={id}
        />
      );
    },
    [onEditDoctor, onDeleteDoctor]
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {!listDoctors || listDoctors.length === 0 ? (
            <EmptyData
              message="Oh no! No Doctor!"
              route={ROUTES.AddDoctor}
              buttonTitle="Add Doctor"
            />
          ) : (
            <FlatList
              data={listDoctors}
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

export default Doctors;

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
