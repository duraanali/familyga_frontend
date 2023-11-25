import React, { memo, useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgPoint from "@svgs/MainPage/SvgPoint";
import FONTS from "@utils/fonts";
import ButtonPrimary from "@components/ButtonPrimary";
import SvgVideo from "@svgs/SvgVideo";
import SvgMessage from "@svgs/SvgMessage";
import SvgBackArrow from "@svgs/SvgBackArrow";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgStethoscopeInactive from "@svgs/MainBottomTab/SvgStethoscopeInactive";
import SvgArrowDown from "@svgs/SvgArrowDown";
import TopicItem from "@components/TopicItem";
import SvgDoctor from "@svgs/MainPage/SvgDoctor";
import SvgLocation from "@svgs/SvgLocation";
import ROUTES from "@utils/routes";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Container from "@components/Container";
import Content from "@components/Content";
import SvgDrug from "@svgs/ListDrugs/SvgDrug";
import SvgHospital from "@svgs/MainPage/SvgHospital";
import SvgUser from "@svgs/SignIn/SvgUser";
import { useFetchKidQuery, useDeleteKidMutation } from "../../../store/slices/KidSlice";

const DOCTOR_DATA = {
  imgKid: require("@assets/Kid/Kid.png"),
  kidName: "Uthmaan Ahmed",
  dob: "04/16/2014",
  doctor: "Dr. Jose Holland",
  school: "St. Joseph High School",
  teacher: "Ms. Jane Doe",
};

const KidProfile = memo((route) => {
  const { navigate, goBack } = useNavigation();
  const { childData } = route.route.params;
  const { top } = useSafeAreaInsets();
  const [kidData, setKidData] = useState(DOCTOR_DATA);
  const [KidNow, setKidNow] = useState({});
  const [doctors, setDoctors] = useState();
  const [teachers, setTeachers] = useState();
  const { data: kid, error, isLoading, refetch } = useFetchKidQuery(childData.id);
  const [deleteKid, { isSuccess: isDeleteSuccess }] = useDeleteKidMutation();

  useEffect(() => {
    // If kid is deleted successfully, navigate to the kids list
    if (isDeleteSuccess) {
      navigate(ROUTES.Kids);
    }
  }, [isDeleteSuccess, navigate]);



  useEffect(() => {
    refetch();
    if (kid && kid.kid) {
      setKidNow(kid.kid);
      setDoctors(kid.kid.childrenAndDoctors);
      setTeachers(kid.kid.childrenAndTeachers);

    }
  }, [isLoading, kid]);

  const onEditProfile = useCallback(() => {
    navigate(ROUTES.EditKid, { childData });
  }, []);

  const onDelete = useCallback(() => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this profile?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => {
            deleteKid(childData.id).unwrap().then((res) => {
            navigate(ROUTES.Kids);
            console.log("Delete success:", res.data)
            }
            );
          } 
        }
      ],
      { cancelable: false }
    );
  }, []);

  const onSchool = useCallback(() => {
    navigate(ROUTES.VideoCall);
  }, []);

  const onHospital = useCallback(() => {
    navigate(ROUTES.DoctorMessage);
  }, []);

  const onKidInformation = useCallback(() => {
    navigate(ROUTES.KidInformation);
  }, []);

  const onWorkingAddress = useCallback(() => {
    navigate(ROUTES.DoctorAddress);
  }, []);

  const onMedication = useCallback(() => {
    navigate(ROUTES.DoctorReview);
  }, []);

  const ageCalculator = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
    };


  const renderItem = useCallback(() => {
    return kidData.doctorServices.map((item, index) => {
      return (
        <TouchableOpacity onPress={onWorkingAddress} style={styles.container}>
          <Text style={styles.txtTitle}>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  }, [kidData.doctorServices]);

  return (
    <Container paddingTop={false} style={styles.container}>
      <Content bounces={false}>
        <View style={[styles.headerView, { paddingTop: top + 24 }]}>
          <View style={styles.header}>
            <View style={styles.setRow}>
              <Text style={styles.kidName}>{KidNow.name}</Text>
              <View style={styles.rateView}>
                {KidNow.dob && <Text style={styles.specialized}>{KidNow.dob}</Text> }
                {KidNow.dob && <Text style={styles.txtRating}> - {ageCalculator(KidNow.dob)} years old</Text> }
                {!KidNow.dob && <Text style={styles.txtRating}> No DOB </Text> }
              </View>
              {doctors && doctors.length > 0 ? (
                <Text style={styles.txtTitle}>
                  Doctor(s):{" "}
                  {doctors.map((item, index) => (
                    <Text key={index}>
                      {item.doctor.name}
                      {index < doctors.length - 1 ? ", " : ""}
                    </Text>
                  ))}
                </Text>
              ) : (
                <Text style={styles.txtTitle}>No Doctor Assigned</Text>
              )}
              {teachers && teachers.length > 0 ? (
                <Text style={styles.txtTitle}>
                  Teacher(s):{" "}
                  {teachers.map((item, index) => (
                    <Text key={index}>
                      {item.teacher.name}
                      {index < teachers.length - 1 ? ", " : ""}
                    </Text>
                  ))}
                </Text>
              ) : (
                <Text style={styles.txtTitle}>No Teacher Assigned</Text>
              )}
            </View>
            {KidNow.image && (
              <Image
                style={styles.imgKid}
                source={{
                  uri: KidNow.image,
                }}
              />
            )}

            {!KidNow.image && (
              <Image
                style={styles.imgKid}
                source={require("@assets/ResultFindDoctor/02.png")}
              />
            )}
          </View>
          <View style={styles.buttonsView}>
            <ButtonPrimary
              onPress={onEditProfile}
              style={styles.buttonPrimary}
              title={"Edit Profile"}
              titleStyle={styles.txtBtn}
            />
            <ButtonPrimary
              onPress={onDelete}
              style={styles.buttonDanger}
              title={"Delete"}
              titleStyle={styles.txtBtn}
            />
          </View>
          <TouchableOpacity
            onPress={goBack}
            style={[styles.svgBackArrow, { top: top + 12, left: 8 }]}
          >
            <SvgBackArrow color={colors.semiBlack} />
          </TouchableOpacity>
        </View>
        <View style={styles.doctorServices}>
          <TopicItem
            Svg={<SvgUser />}
            title={"Personal Infomation"}
            onPress={onKidInformation}
          />
          <TopicItem
            Svg={<SvgPoint width={21} height={20} />}
            title={`Appointments`}
            onPress={onEditProfile}
          />
          <TopicItem
            Svg={<SvgDrug width={18} height={20} color={colors.green} />}
            title={"Medications"}
            onPress={onMedication}
          />
          <TopicItem
            Svg={<SvgHospital width={18} height={20} color={colors.green} />}
            title={"Hospitals"}
            onPress={onHospital}
          />
          <TopicItem
            Svg={<SvgLocation width={18} height={20} color={colors.green} />}
            title={"Schools"}
            onPress={onSchool}
          />
        </View>
      </Content>
    </Container>
  );
});

export default KidProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  headerView: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingLeft: 32,
    paddingBottom: 24,
    justifyContent: "flex-end",
    paddingRight: 24,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  kidName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  specialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.orange,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: -4,
    color: colors.orange,
  },
  svgStart: {
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 5,
  },
  rateView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 11,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginRight: 16,
  },
  imgKid: {
    width: 88,
    height: 128,
    borderRadius: 16,
    overflow: "hidden",
  },
  setRow: {
    width: 215,
  },
  buttonPrimary: {
    marginRight: 24,
    height: 40,
  },
  buttonDanger: {
    backgroundColor: colors.red,
    height: 40,
  },
  txtBtn: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },
  svgVideo: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },
  svgMessage: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  svgBackArrow: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  doctorServices: {
    // backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 16,
    paddingBottom: 3,
    marginTop: 22,
    marginBottom: 23,
  },
  txtDoctorServices: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textTransform: "uppercase",
    color: colors.semiBlack,
  },
  svgArrowDown: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 20,
    height: 60,
    marginBottom: 16,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemView: {
    flexDirection: "row",
    paddingLeft: 16,
    flexWrap: "wrap",
  },
});
