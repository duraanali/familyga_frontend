import React, { memo, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "@utils/fonts/index";
import colors from "@utils/colors";
import SchoolItem from "@components/SchoolItem";
import keyExtractor from "@utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useFetchSchoolsQuery } from "../../store/slices/SchoolSlice";
import LoadingScreen from "@components/LoadingScreen";
import EmptyData from "@components/EmptyData";
import ROUTES from "@utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDeleteSchoolMutation } from "../../store/slices/SchoolSlice";


const Schools = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const {
    data: schools,
    error,
    isLoading,
    refetch,
  } = useFetchSchoolsQuery();
  const [deleteSchool] = useDeleteSchoolMutation();
  const [listSchools, setListSchools] = useState([]);

  useEffect(() => {
    refetch();
    if (schools) {
      setListSchools(schools.schools);
    }
    refetch();
  }, [isLoading, schools]);

  const onDeleteSchool = useCallback((id) => {
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
            deleteSchool(id);
            refetch();
          },
        },
      ],
      { cancelable: false }
    );
  }, []);

  const onEditSchool = useCallback((item) => {
    navigate(ROUTES.EditSchool, { item: item });
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const { imgHospital, name, email, phone, address, id } = item;
      return (
        <SchoolItem
          imgHospital={require("@assets/Hospital/hospital.png")}
          name={name}
          email={email}
          phone={phone}
          address={address}
          onEditSchool={() => onEditSchool(item)}
          onDeleteSchool={() => onDeleteSchool(id)}
          id={id}
        />
      );
    },
    [onEditSchool, onDeleteSchool]
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {!listSchools || listSchools.length === 0 ? (
            <EmptyData
              message="Oh no! No School!"
              route={ROUTES.AddSchool}
              buttonTitle="Add School"
            />
          ) : (
            <FlatList
              data={listSchools}
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

export default Schools;

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
