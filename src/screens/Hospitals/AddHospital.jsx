import React, { memo, useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import SvgBackArrow from "@svgs/SvgBackArrow";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    useCreateHospitalMutation,
    useFetchHospitalsQuery
} from "../../store/slices/HospitalSlice";

import { useForm, Controller } from "react-hook-form";
import TextInputHealer from "@components/TextInputHealer";
import LoadingScreen from "@components/LoadingScreen";

const AddHospital = memo(() => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const [createHospital, { isSuccess, isError, error }] = useCreateHospitalMutation();
  const { data: hospitals, refetch } = useFetchHospitalsQuery();
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [showError, setShowError] = useState(false);


  useEffect(() => {
    if (isSuccess) {
      refetch(); 
      navigation.navigate(ROUTES.Hospitals);
    } else if (isError && error && !showError) {
      // Display the error message
      Alert.alert(
        "Update Error",
        error.data?.message || "Failed to add hospital."
      );
      setShowError(true);
    }
  }, [isSuccess, isError, error, refetch, navigation]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      
    },
  });

  const onSubmit = useCallback(
    (data) => {
        setIsLoading(true);
        createHospital(data).unwrap();
        setIsLoading(false);
        navigation.navigate(ROUTES.Hospitals);
    },
    [createHospital, setIsLoading]

  );

    // Conditional rendering based on loading state
    if (isLoading) {
      return <LoadingScreen />; // Replace with your LoadingScreen component
    }

  return (
    <View style={styles.container}>
      <View
        style={[styles.header, { paddingTop: top + 12, height: top + 112 }]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={styles.skipView}
        >
          <SvgBackArrow width={16} height={16} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.txtCreateAccount}>Add New Hospital</Text>
        <View style={styles.skipView} />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
     
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Address"
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phone"
            />
          )}
        />

      </ScrollView>

      <View style={styles.buttonView}>
        <ButtonPrimary title={"Add Hospital"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
});

export default AddHospital;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 70,
    paddingLeft: 16,
    paddingRight: 24,
    backgroundColor: colors.secondBlue,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    justifyContent: "space-between",
  },
  txtSkip: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  skipView: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
  },
  txtCreateAccount: {
    fontFamily: FONTS.HIND.Regular,
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 20,
    // lineHeight: 20,
    color: colors.white,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 4,
    borderColor: colors.white,
    position: "absolute",
  },
  avatarImage: {
    width: 84,
    height: 84,
    borderRadius: 40,
  },

  addView: {
    backgroundColor: colors.oldBurgundy,
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  input: {
    marginTop: 24,
    flex: 1,
    // marginLeft: 16,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.semiBlack,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
  },
  datePicker: {
    width: "100%",
    marginTop: 24,
    backgroundColor: colors.white,
    // marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    // borderRadius: 5,
  },
  pickerContainer: {
    marginTop: 24,
    // marginLeft: 16,
    // borderWidth: 1,
    borderColor: "#ccc",
    // borderRadius: 5,
  },
  picker: {
    flex: 1,
    fontSize: 14,
    // width: "100%",
    height: 80,
    marginLeft: -10,
    borderRadius: 0,
    padding: 5,
    // alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonView: {
    position: "absolute",
    paddingBottom: getBottomSpace() + 24,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 12,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingTop: 72,
    // paddingHorizontal: 40,
    paddingBottom: getBottomSpace() + 120,
  },
});
