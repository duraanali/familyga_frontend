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
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
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
import * as ImageManipulator from 'expo-image-manipulator';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import {
  useCreateKidMutation,
  useFetchKidsQuery,
} from "../../../store/slices/KidSlice";
import { useFetchDoctorsQuery } from "../../../store/slices/DoctorSlice";

import { useForm, Controller } from "react-hook-form";
import TextInputHealer from "@components/TextInputHealer";
import LoadingScreen from "@components/LoadingScreen";

const AddKid = memo(() => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const [listDoctorsData, setListDoctorsData] = useState([]);
  const [image, setImage] = useState(null);
  const [createKid, { isSuccess, isError, error }] = useCreateKidMutation();
  const { refetch } = useFetchKidsQuery();
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [showError, setShowError] = useState(false);
  const {
    data: doctors,
    error: errorDoctors,
    isLoading: isLoadingDoctors,
  } = useFetchDoctorsQuery();

  useEffect(() => {
    if (doctors && doctors.doctors.length > 0) {
      setListDoctorsData(doctors.doctors);
    }
  }, [isLoadingDoctors, doctors]);

  useEffect(() => {
    if (isSuccess) {
      refetch(); 
      navigation.navigate(ROUTES.Kids);
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
      name: "",
      image: "",
      gender: "",
      dob: "",
      birth_location: "",
      blood_type: "",
      weight: "",
      height: "",
      allergies: "",
      eye_color: "",
      hair_color: "",
      insurance_card_number: "",
      ss_number: "",
      doctorId: "",
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
  

  const resizeImage = async (uri) => {
    try {
      // Define the desired width and height
      const desiredWidth = 317;  // or any desired size
      const desiredHeight = 300; // or any desired size
  
      // Resize the image
      const resizedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: desiredWidth, height: desiredHeight } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
  
      // Return the URI of the resized image
      return resizedImage.uri;
    } catch (error) {
      console.error("Error resizing the image:", error);
      return uri; // Return the original URI if resizing fails
    }
  };
  

  const onSubmit = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        let cloudinaryURL = '';
        if (image) {
          // Prepare the form data for the image
          const resizedImageUri = await resizeImage(image);
          const formData = new FormData();
          formData.append('file', {
            uri: resizedImageUri,
            type: 'image/jpeg', // or the correct image mime type
            name: 'upload.jpg', // or any name you like
          });
          formData.append('upload_preset', 'kidapp');
          // Upload the image to Cloudinary
          const cloudinaryResponse = await fetch(
            'https://api.cloudinary.com/v1_1/doa9xmvsa/image/upload',
            {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          const cloudinaryData = await cloudinaryResponse.json();
          cloudinaryURL = cloudinaryData.secure_url;
        }
        // Include Cloudinary URL in the data sent to your backend
        const completeData = {
          ...data,
          image: cloudinaryURL,
        };

        await createKid(completeData).unwrap();
        console.log("Create success");
        setIsLoading(false);
        navigation.navigate(ROUTES.Kids);
      } catch (error) {
        console.error("Creation failed:", error);
        setIsLoading(false);
      }
    },
    [createKid, image, navigation]
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
        <Text style={styles.txtCreateAccount}>Add New Kid</Text>
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
          render={({ field: { onChange, value } }) => (
            <DatePicker
              style={styles.datePicker}
              date={value}
              mode="date"
              placeholder="Select date"
              format="MM/DD/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
                datePickerCon: { backgroundColor: 'grey', },
                placeholderText: {
                  fontSize: 14,
                  color: "#888",
                },
                dateText: {
                  fontSize: 14,
                  color: colors.semiBlack,
                },
              }}
              onDateChange={(date) => onChange(date)}
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
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={value}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
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
        {listDoctorsData && (
          <Controller
            control={control}
            name="doctorId"
            render={({ field: { onChange, value } }) => (
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={value}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                >
                  <Picker.Item label="Select Doctor" value="" />
                  {listDoctorsData &&
                    listDoctorsData?.map((doctor) => (
                      <Picker.Item label={doctor.name} value={doctor.id} />
                    ))}
                </Picker>
              </View>
            )}
          />
        )}
      </ScrollView>

      <View style={[styles.avatar, { top: top + 72 }]} >
        <View>
        {image && <Image source={{ uri: image }} style={styles.avatarImage} />}
        {!image && <SvgAvatar /> }
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.addView} onPress={pickImage} >
          <SvgAdd />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <ButtonPrimary title={"Add Kid"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
});

export default AddKid;

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
