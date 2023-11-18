import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  LogBox,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import SvgStar from "@svgs/AppointmentList/SvgStar";
import SvgLocation from "@svgs/SvgLocation";
import SvgTime from "@svgs/WalkThought/SvgTime";
import ButtonPrimary from "@components/ButtonPrimary";
import SvgDone from "@svgs/AppointmentList/SvgDone";
import SvgCancel from "@svgs/AppointmentList/SvgCancel";

const AppointmentListItem = (props) => {
  const {
    description,
    kidImage,
    svgDoctor,
    kidName,
    Type,
    title,
    location,
    time,
    onCancel,
    onReschedule,
    disabled,
    done,
    cancel,
  } = props;

  const heightAnim = useRef(new Animated.Value(112)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const showAnim = useRef(new Animated.Value(1)).current;
  const [viewState, setViewState] = useState(true);
  const circleStyle = done ? styles.done : cancel ? styles.cancel : null;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const heightStyle = {
    height: heightAnim,
  };

  const opacityStyle = {
    opacity: opacityAnim,
  };
  const fadeAnim = {
    opacity: showAnim,
  };

  const toggleAnimation = useCallback(() => {
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: 395,
        timing: 1500,
      }).start(() => {
        setViewState(false);
      }) &&
        Animated.timing(opacityAnim, {
          toValue: 1,
          timing: 400,
        }).start();
    } else {
      Animated.timing(heightAnim, {
        toValue: 112,
        timing: 1500,
      }).start(setViewState(true));
    }
  }, [heightAnim, viewState, opacityAnim]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        timing: 400,
      }).start() &&
        Animated.timing(showAnim, {
          toValue: 0,
          timing: 100,
        }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
      }).start() &&
        Animated.timing(showAnim, {
          toValue: 1,
          duration: 1500,
        }).start();
    }
  }, [opacityAnim, viewState, showAnim]);

  const onPress = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <Animated.View style={[styles.appointmentItem, heightStyle]}>
      <TouchableOpacity
        style={styles.flex}
        activeOpacity={0.6}
        onPress={onPress}
      >
        {!viewState ? (
          <Animated.View style={opacityStyle}>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.line} />
            <View style={styles.contentView}>
              <Image style={styles.imgDoctor} source={kidImage} />
              <View style={styles.contentStyle}>
                <Text style={styles.doctorName}>{kidName}</Text>
                <View style={styles.rateView}>
                  <Text style={styles.specialized}>{Type}</Text>
                </View>
                <Text style={styles.txtTitle}>{title}</Text>
              </View>
            </View>
            <View style={styles.locationView}>
              <View style={styles.svgView}>
                <SvgLocation />
              </View>
              <Text style={styles.txtLocation}>{location}</Text>
            </View>
            <View style={styles.timeView}>
              <View style={styles.svgView}>
                <SvgTime />
              </View>
              <Text style={styles.txtTime}>{time}</Text>
            </View>
            <View style={styles.btnView}>
              <ButtonPrimary
                disable={disabled}
                style={styles.btnCancel}
                title={"Cancel"}
                titleStyle={styles.txtBtnCancel}
                onPress={onCancel}
              />
              <ButtonPrimary
                disable={disabled}
                style={styles.btnReschedule}
                titleStyle={styles.txtReschedule}
                title={"Reschedule"}
                onPress={onReschedule}
              />
            </View>
          </Animated.View>
        ) : null}
        {viewState ? (
          <Animated.View style={[styles.container, fadeAnim]}>
            <Image style={styles.smallImg} source={kidImage} />
            <Text style={styles.shortTitle}>{title}</Text>
            <Text style={styles.nameDoctor}>{kidName}</Text>
            <View style={styles.setRow}>
              <Text style={styles.timeStyle}>{time}</Text>
              <View style={styles.flexDirection}>
                <View style={circleStyle}>
                  {done ? <SvgDone /> : cancel ? <SvgCancel /> : null}
                </View>
                <Text style={styles.txtStatus}>
                  {" "}
                  {done ? "done" : cancel ? "cancel" : null}
                </Text>
              </View>
            </View>
          </Animated.View>
        ) : null}
      </TouchableOpacity>
      {!viewState && <View style={styles.base} />}
    </Animated.View>
  );
};

export default AppointmentListItem;

const styles = ScaledSheet.create({
  appointmentItem: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 24,
    overflow: "hidden",
    paddingHorizontal: 16,
    height: 395,
    marginBottom: 16,
  },
  description: {
    marginTop: 24,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textTransform: "uppercase",
    color: colors.semiBlack,
  },
  base: {
    position: "absolute",
    width: 4,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.classicBlue,
    top: 28,
  },
  line: {
    width: 295,
    height: 1,
    backgroundColor: colors.pageBackGround,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 26,
  },
  imgDoctor: {
    width: 72,
    height: 104,
    borderRadius: 12,
  },
  contentView: {
    flexDirection: "row",
  },
  contentStyle: {
    marginLeft: 16,
  },
  doctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  specialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.silverChalice,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 21,
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
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 10,
    marginRight: 16,
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 17,
  },
  svgView: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pageBackGround,
    marginRight: 8,
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
  },
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  btnCancel: {
    flex: 1,
    height: 40,
    backgroundColor: colors.silverChaliceOpacity,
    marginRight: 16,
  },
  txtBtnCancel: {
    textTransform: "capitalize",
    color: colors.silverChalice,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 14,
  },
  btnReschedule: {
    flex: 1,
    height: 40,
    backgroundColor: colors.secondBlueOpacity,
  },
  txtReschedule: {
    textTransform: "capitalize",
    color: colors.secondBlue,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 14,
  },
  container: {
    paddingVertical: 16,
    paddingLeft: 68,
    flex: 1,
  },
  smallImg: {
    width: 56,
    height: 80,
    borderRadius: 8,
    position: "absolute",
    top: 16,
  },
  shortTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: "uppercase",
    marginRight: -10,
  },
  nameDoctor: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 7,
  },
  timeStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 8,
  },
  done: {
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.classicBlue,
    borderRadius: 12,
  },
  cancel: {
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#979797",
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtStatus: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    color: colors.dimGray,
    marginTop: 2,
    textTransform: "capitalize",
  },
});
