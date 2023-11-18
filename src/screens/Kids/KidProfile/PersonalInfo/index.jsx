import React, { memo, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";
import SvgCalendar from "@svgs/MainPage/SvgCalendar";
import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";

const DATA = {
  height: "Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays",
  imgKid: require("@assets/AppointmentCalendar/01.png"),
  kidName: "John Smith",
  dob: "ABDIWALI",
  doctor: "5.0",
  teacher: "The Advantages Of\nMinimal Repair Technique",
  hospital: "949 Satterfield Fort Suite 520",
  school: "Jan 01, 2017",
  weight: "12:00AM - 02:30PM",
  ss_number: 393,
  orderServices: [
    {
      title: "Overall examination",
      time: "55 mins",
      price: 150,
    },
    {
      title: "Blood tests",
      time: "12 mins",
      price: 243,
    },
  ],
};

const PersonalInformation = memo(() => {
  const { goBack } = useNavigation();
  const [appointmentData, setAppointmentData] = useState(DATA);

  const {
    imgDoctor,
    doctorName,
    specialized,
    date,
    time,
    total,
    orderServices,
  } = appointmentData;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoView}>
          <Image style={styles.imgDoctor} source={imgDoctor} />
          <View>
            <Text style={styles.txtDoctorName}>{doctorName}</Text>
            <Text style={styles.txtSpecialized}>{specialized}</Text>
          </View>
        </View>
        <View style={styles.dateView}>
          <View style={styles.svgView}>
            <SvgCalendar color={colors.green} />
          </View>
          <Text style={styles.txtDate}>{date}</Text>
        </View>
        <View style={styles.timeView}>
          <View style={styles.svgView}>
            <SvgCalendar color={colors.green} />
          </View>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.orderView}>
            <Text style={styles.txtOrderServices}>Order Services</Text>
          </View>
          <View>
            {orderServices.map((item, index) => {
              const { title, price, time } = item;
              return (
                <View key={index} style={styles.descriptionView}>
                  <View style={styles.flexRow}>
                    <Text style={styles.textDescription}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                  </View>
                  <Text style={styles.textTime}>{time}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.totalView}>
            <Text style={styles.txtTotal}>TOTAL</Text>
            <Text style={styles.txtTotal}>${total}</Text>
          </View>
        </View>
        <ButtonPrimary
          onPress={goBack}
          style={styles.btn1}
          title={"Reschedule"}
        />
        <ButtonPrimary
          onPress={goBack}
          titleStyle={styles.txtBtn2}
          style={styles.btn2}
          title={"Cancel Appointment"}
        />
      </ScrollView>
    </View>
  );
});

export default PersonalInformation;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  infoView: {
    backgroundColor: colors.white,
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 24,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  imgDoctor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginRight: 16,
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    color: colors.black1,
  },
  txtSpecialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.brown,
  },
  dateView: {
    backgroundColor: colors.white,
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 24,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  timeView: {
    backgroundColor: colors.white,
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 24,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  svgView: {
    backgroundColor: colors.pageBackGround,
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    letterSpacing: 0.3,
    lineHeight: 29,
    color: colors.black1,
    marginLeft: 17,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    letterSpacing: 0.3,
    lineHeight: 27,
    color: colors.black1,
    marginLeft: 17,
  },
  contentView: {
    backgroundColor: colors.white,
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 24,
    borderRadius: 8,
  },
  orderView: {
    borderBottomWidth: 1,
    borderColor: colors.line,
  },
  txtOrderServices: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: colors.black1,
    marginLeft: 17,
    marginBottom: 11,
    marginTop: 16,
  },
  descriptionView: {
    borderBottomWidth: 1,
    borderColor: colors.line,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  textDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 26,
    color: colors.brown1,
  },
  price: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 29,
    color: colors.black1,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.classicBlue,
  },
  totalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  txtTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    color: colors.black1,
    textTransform: "uppercase",
  },
  btn1: {
    marginHorizontal: 40,
  },
  btn2: {
    marginHorizontal: 40,
    backgroundColor: colors.pageBackGround,
    marginTop: 6,
    marginBottom: 16,
  },
  txtBtn2: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    color: colors.classicBlue,
  },
});
