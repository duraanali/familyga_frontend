import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgLocation from "@svgs/SvgLocation";
import SvgStar from "@svgs/AppointmentList/SvgStar";
import ButtonPrimary from "@components/ButtonPrimary";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SvgDelete from "@svgs/SvgDelete";

const KidItem = (props) => {
  const {
    style,
    image,
    name,
    dob,
    school,
    rating,
    childrenAndDoctors,
    childrenAndTeachers,
    onCall,
    onMessage,
    activeRemove,
    onRemove,
    onPress,
    onLocation,
  } = props;
  const buttonDelete = (color, backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View
        style={[styles.btnDeleteView, { transform: [{ translateX: trans }] }]}
      >
        <SvgDelete />
      </Animated.View>
    );
  };

  console.log("childrenAndDoctors", childrenAndDoctors);
  const ageCalculator = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const renderRightActions = (progress) => {
    return (
      <TouchableOpacity
        onPress={onRemove}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        {buttonDelete("#000000", "#eeeeee", 96, progress)}
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      friction={2}
      rightThreshold={40}
      renderRightActions={activeRemove ? renderRightActions : null}
    >
      <TouchableOpacity
        // pass child id to onPress
        onPress={onPress}
        activeOpacity={0.6}
        style={[styles.doctorItem, style]}
      >
        {image && (
          <Image
            style={styles.imgDoctor}
            source={{
              uri: image,
            }}
          />
        )}
        {!image && (
          <Image
            style={styles.imgDoctor}
            source={require("@assets/ResultFindDoctor/04.png")}
          />
        )}
        <View style={styles.rateView}>
          <Text style={styles.txtkidName}>{name}</Text>
        </View>
        {dob && (
          <Text style={styles.txtdob}>
            {dob} - {ageCalculator(dob)} years old
          </Text>
        )}
        <TouchableOpacity
          onPress={onLocation}
          activeOpacity={0.6}
          style={styles.locationView}
        >
          <View>
            {childrenAndDoctors && childrenAndDoctors.length > 0 && (
              <Text style={styles.txtLocation}>
                Doctor(s):{" "}
                {childrenAndDoctors.map((item) => item.doctor.name).join(", ")}
              </Text>
            )} 

            {childrenAndTeachers && childrenAndTeachers.length > 0 && (
              <Text style={styles.txtLocation}>
                Teacher(s):{" "}
                {childrenAndTeachers.map((item) => item.teacher.name).join(", ")}
              </Text>
            ) }
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default KidItem;

const styles = StyleSheet.create({
  doctorItem: {
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingLeft: 88,
    paddingRight: 16,
    height: 141,
    flex: 1,
    marginBottom: 16,
    marginLeft: 24,
  },
  imgDoctor: {
    width: 56,
    height: 56,
    borderRadius: 56,
    overflow: "hidden",
    position: "absolute",
    top: 16,
    left: 16,
  },
  txtkidName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: colors.semiBlack,
    textTransform: "uppercase",
  },
  txtdob: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    color: colors.silverChalice,
    marginTop: 4,
    marginBottom: 4,
  },
  locationView: {
    flexDirection: "row",
    height: 26,
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 25,
    color: colors.brown1,
    marginBottom: -6,
    // marginLeft: 4,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.orange,
  },
  rateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: -1,
  },
  svgStart: {
    marginBottom: 1,
    marginRight: 5,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCall: {
    flex: 1,
    height: 32,
    backgroundColor: colors.pageBackGround,
    marginRight: 16,
  },
  txtBtnCall: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "400",
    textTransform: "capitalize",
    color: colors.silverChalice,
    fontSize: 14,
  },
  btnMessage: {
    flex: 1,
    height: 32,
    backgroundColor: colors.secondBlueOpacity,
  },
  txtBtnMessage: {
    fontWeight: "500",
    textTransform: "capitalize",
    color: colors.secondBlue,
    fontSize: 14,
  },
  btnDeleteView: {
    flex: 1,
    backgroundColor: colors.secondRed,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 96,
    height: 141,
  },
});
