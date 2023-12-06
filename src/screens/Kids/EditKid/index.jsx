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
import SvgSmallHeart from "@svgs/ForgotPassword/SvgSmallHeart";
import SvgAdd from "@svgs/CreateAccount/SvgAdd";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import SvgBackArrow from "@svgs/SvgBackArrow";
import SvgAvatar from "@svgs/CreateAccount/SvgAvatar";
import InputButton from "@components/InputButton";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import LoadingScreen from "@components/LoadingScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useUpdateKidMutation,
  useFetchKidsQuery,
} from "../../../store/slices/KidSlice";

import { useForm, Controller } from "react-hook-form";
import TextInputHealer from "@components/TextInputHealer";

const EditKid = memo(({ route }) => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const { childData } = route.params;
  const [updateKid, { isSuccess, isError, error }] = useUpdateKidMutation();
  const { refetch } = useFetchKidsQuery();
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [image, setImage] = useState(null);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      navigation.navigate(ROUTES.KidProfile);
    } else if (isError && error && !showError) {
      // Display the error message
      Alert.alert(
        "Update Error",
        error.data?.message || "Failed to update the profile."
      );
      setShowError(true);
    }
  }, [isSuccess, isError, error, refetch, navigation]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: childData.name,
      gender: childData.gender,
      dob: childData.dob,
      birth_location: childData.birth_location,
      blood_type: childData.blood_type,
      weight: childData.weight,
      height: childData.height,
      allergies: childData.allergies,
      eye_color: childData.eye_color,
      hair_color: childData.hair_color,
      insurance_card_number: childData.insurance_card_number,
      ss_number: childData.ss_number,
      image: childData.image,
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to images only
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        await updateKid({ id: childData.id, ...data })
          .unwrap()
          .then((res) => {
            setIsLoading(false);
            console.log("Update success:", res.data);
            navigation.navigate(ROUTES.KidProfile);
          });
      } catch (error) {
        console.error("Update failed:", error);
        setIsLoading(false);
      }
    },
    [updateKid, navigation]
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
        <Text style={styles.txtCreateAccount}>Edit Profile</Text>
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
          name="dob"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Birthday"
            />
          )}
        />

        <Controller
          control={control}
          name="birth_location"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Birth Location"
            />
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Gender"
            />
          )}
        />

        <Controller
          control={control}
          name="blood_type"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Blood Type"
            />
          )}
        />

        <Controller
          control={control}
          name="weight"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Weight"
            />
          )}
        />

        <Controller
          control={control}
          name="height"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Height"
            />
          )}
        />

        <Controller
          control={control}
          name="allergies"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Allergies"
            />
          )}
        />

        <Controller
          control={control}
          name="eye_color"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Eye Color"
            />
          )}
        />

        <Controller
          control={control}
          name="hair_color"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Hair Color"
            />
          )}
        />

        <Controller
          control={control}
          name="insurance_card_number"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Insurance Card #"
            />
          )}
        />

        <Controller
          control={control}
          name="ss_number"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputHealer
              style={styles.input}
              onBlur={onBlur}
              placeholderTextColor={colors.dimGray}
              onChangeText={onChange}
              value={value}
              placeholder="Social Security #"
            />
          )}
        />
      </ScrollView>

      <View style={[styles.avatar, { top: top + 72 }]} >
        <View>
        {!childData.image && !image &&  <SvgAvatar />}
        {!image && childData.image && <Image source={{ uri: childData.image }} style={styles.avatarImage} />}
        {image && childData.image && <Image source={{ uri: image }} style={styles.avatarImage} />}
        {image && !childData.image && <Image source={{ uri: image }} style={styles.avatarImage} />}
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.addView} onPress={pickImage} >
          <SvgAdd />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <ButtonPrimary title={"Update"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
});

export default EditKid;

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
    paddingBottom: 84,
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
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
  avatarImage: {
    width: 84,
    height: 84,
    borderRadius: 40,
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
    marginLeft: 16,
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.semiBlack,
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
    paddingHorizontal: 40,
    paddingBottom: getBottomSpace() + 120,
  },
});
