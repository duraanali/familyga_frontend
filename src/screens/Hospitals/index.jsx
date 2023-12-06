import React, { memo, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";
import HospitalItem from "@components/HospitalItem";
import keyExtractor from "@utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useFetchHospitalsQuery } from "../../store/slices/HospitalSlice";
import LoadingScreen from "@components/LoadingScreen";
import EmptyData from "@components/EmptyData";
import ROUTES from "@utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDeleteHospitalMutation } from "../../store/slices/HospitalSlice";

const DATA_NAVIGATE = {
  location: "New York",
};

const RESULT_DATA = [
  {
    imgDoctor: require("@assets/ResultFindDoctor/01.png"),
    doctorName: "Angel Manning",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/02.png"),
    doctorName: "Jeremy Porter",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/03.png"),
    doctorName: "Cecelia Boone",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/04.png"),
    doctorName: "Jesse Burgess",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/01.png"),
    doctorName: "Angel Manning",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
];

const Hospitals = memo(() => {
  const { navigate, goBack } = useNavigation();
  const [data, setData] = useState(DATA_NAVIGATE);
  const { top, bottom } = useSafeAreaInsets();
  const {
    data: hospitals,
    error,
    isLoading,
    refetch,
  } = useFetchHospitalsQuery();
  const [deleteHospital, { isSuccess, isError, isLoading: isDeleting }] =
    useDeleteHospitalMutation();
  const [listHospitals, setListHospitals] = useState([]);

  useEffect(() => {
    refetch();
    if (hospitals) {
      setListHospitals(hospitals.hospitals);
    }
    refetch();
  }, [isLoading, hospitals]);

  const onDeleteHospital = useCallback((id) => {
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
            deleteHospital(id);
            refetch();
          },
        },
      ],
      { cancelable: false }
    );
  }, []);

  const onEditHospital = useCallback((item) => {
    navigate(ROUTES.EditHospital, { item: item });
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const { imgHospital, name, email, phone, address, id } = item;
      return (
        <HospitalItem
          imgHospital={require("@assets/Hospital/hospital.png")}
          name={name}
          email={email}
          phone={phone}
          address={address}
          onEditHospital={() => onEditHospital(item)}
          onDeleteHospital={() => onDeleteHospital(id)}
          id={id}
        />
      );
    },
    [onEditHospital, onDeleteHospital]
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {!listHospitals || listHospitals.length === 0 ? (
            <EmptyData
              message="Oh no! No Hospitals!"
              route={ROUTES.AddHospital}
              buttonTitle="Add Hospital"
            />
          ) : (
            <FlatList
              data={listHospitals}
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

export default Hospitals;

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
