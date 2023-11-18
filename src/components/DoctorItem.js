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

const DoctorItem = (props) => {
  const {
    style,
    imgDoctor,
    doctorName,
    specialized,
    rating,
    location,
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
        onPress={onPress}
        activeOpacity={0.6}
        style={[styles.doctorItem, style]}
      >
        <Image style={styles.imgDoctor} source={imgDoctor} />
        <View style={styles.rateView}>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <View style={styles.setRow}>
            <SvgStar style={styles.svgStart} />
            <Text style={styles.txtRating}>{rating}</Text>
          </View>
        </View>
        <Text style={styles.txtSpecialized}>{specialized}</Text>
        <TouchableOpacity
          onPress={onLocation}
          activeOpacity={0.6}
          style={styles.locationView}
        >
          <SvgLocation color={colors.dimGray} />
          <Text style={styles.txtLocation}> {location}</Text>
        </TouchableOpacity>
        <View style={styles.btnView}>
          <ButtonPrimary
            style={styles.btnCall}
            title={"Call"}
            titleStyle={styles.txtBtnCall}
            onPress={onCall}
          />
          <ButtonPrimary
            style={styles.btnMessage}
            titleStyle={styles.txtBtnMessage}
            title={"Message"}
            onPress={onMessage}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default DoctorItem;

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
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: colors.semiBlack,
    textTransform: "uppercase",
  },
  txtSpecialized: {
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
    lineHeight: 20,
    color: colors.brown1,
    marginBottom: -6,
    marginLeft: 4,
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
