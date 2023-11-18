import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  useMemo,
} from "react";
import {
  Animated,
  Easing,
  LayoutAnimation,
  LogBox,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import SvgPen from "@svgs/StaticHealth/SvgPen";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import SvgCircle from "@svgs/StaticHealth/SvgCircle";
import ConditionIndexItem from "@components/ConditionIndexItem";

const Y = ["100", "50", "10", "0"];
const Y1 = ["250", "150", "100", "50", "10", "0"];
const X = ["S", "M", "T", "W", "T", "F", "S"];
const VALUE = [16, 32, 48, 24, 40, 80, 64];
const VALUE1 = [26, 52, 78, 39, 65, 130, 104];

const StaticsHealthChart = memo((props) => {
  const {
    onSeeGoals,
    style,
    percentage,
    glycemicIndex,
    onPress,
    onEditGoal,
    Svg,
  } = props;
  const [viewState, setViewState] = useState(true);
  const [startAnim, setStartAnim] = useState(false);
  const [axisY, setAxisY] = useState(Y);
  const [axisX, setAxisX] = useState(X);
  const [value, setValue] = useState(VALUE);

  const heightAnim = useRef(new Animated.Value(240)).current;
  const circleOpacity = useRef(new Animated.Value(0)).current;
  const editOpacity = useRef(new Animated.Value(1)).current;

  const heightStyle = {
    height: heightAnim,
  };
  const opacityStyle = {
    opacity: circleOpacity,
  };
  const editOpacityStyle = {
    opacity: editOpacity,
  };

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onChart = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };

  const onSeeDetails = () => {
    toggleAnimation();
  };

  const toggleAnimation = useCallback(() => {
    setStartAnim(true);
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: 359,
        timing: 1500,
      }).start(() => {
        setViewState(false);
        setAxisY(Y1);
        setValue(VALUE1);
      });
    } else {
      Animated.timing(heightAnim, {
        toValue: 240,
        timing: 1500,
      }).start(() => {
        setViewState(true);
        setAxisY(Y);
        setValue(VALUE);
        setStartAnim(false);
      });
    }
  }, [heightAnim, viewState]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(circleOpacity, {
        toValue: 1,
        timing: 1500,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 0,
        timing: 1500,
      }).start();
    } else {
      Animated.timing(circleOpacity, {
        toValue: 0,
        duration: 400,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 1,
        timing: 1500,
      }).start();
    }
  }, [circleOpacity, viewState, editOpacity]);

  const renderChartItem = useMemo(() => {
    return value.map((item, index) => {
      const heightAnimation = new Animated.Value(0);
      Animated.timing(heightAnimation, {
        easing: Easing.linear,
        toValue: item,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return (
        <Animated.View
          key={index}
          style={[styles.chartItem, { height: heightAnimation }]}
        />
      );
    });
  }, [value]);

  const bottomX = viewState ? { bottom: 42 } : { bottom: 13 };
  const bottomY = viewState ? { bottom: 50 } : { bottom: 24 };
  const bottomChart = viewState ? { bottom: 64 } : { bottom: 42 };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onChart();
          onPress();
        }}
      >
        <Animated.View style={[styles.chartView, style, heightStyle]}>
          <View style={styles.svgLeft}>{Svg}</View>
          <Animated.View style={[styles.svgRight, editOpacityStyle]}>
            <SvgPen />
          </Animated.View>
          <View style={[styles.axisYView, bottomY]}>
            {axisY.map((item, index) => {
              return (
                <Text style={styles.txtAxisY} key={index}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View style={[styles.chartItemView, bottomChart]}>
            {renderChartItem}
          </View>
          <View style={[styles.axisXView, bottomX]}>
            {axisX.map((item, index) => {
              return (
                <Text key={index} style={styles.txtAxisX}>
                  {item}
                </Text>
              );
            })}
          </View>
          <Animated.View style={[styles.svgCircle, opacityStyle]}>
            <SvgCircle startAnim={startAnim} percentage={percentage} />
            <Text style={styles.txtGlycemicIndex}>
              {glycemicIndex}
              <Text style={styles.txtMgdl}>mg/dl</Text>
            </Text>
          </Animated.View>
          {viewState && (
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  onSeeDetails();
                  props.onSeeDetails();
                }}
                activeOpacity={0.6}
                style={styles.btn1}
              >
                <Text style={styles.txtSeeDetails}>See Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onSeeGoals}
                activeOpacity={0.6}
                style={styles.btn2}
              >
                <Text style={styles.txtSetGoals}>Set Goals</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </TouchableOpacity>
      {!viewState && (
        <View style={styles.conditionIndexView}>
          <ConditionIndexItem
            title={"GOAL"}
            Svg={<SvgPen />}
            time={"12 May 2020"}
            parameter={"69"}
            unitOfMeasure={"mg/ml"}
            onPress={onEditGoal}
          />
          <ConditionIndexItem
            title={"PROGESS"}
            time={"16 Nov 2020"}
            parameter={"72"}
            unitOfMeasure={"mg/ml"}
          />
          <ConditionIndexItem
            title={"MIN"}
            time={"04 Jul 2020"}
            parameter={"25"}
            unitOfMeasure={"mg/ml"}
          />
          <ConditionIndexItem
            title={"MAX"}
            time={"16 Nov 2020"}
            parameter={"96"}
            unitOfMeasure={"mg/ml"}
          />
          <View style={styles.lineVertical} />
          <View style={styles.lineHorizontal} />
        </View>
      )}
    </View>
  );
});

export default StaticsHealthChart;

const styles = ScaledSheet.create({
  chartView: {
    marginHorizontal: 16,
    height: 240,
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  svgLeft: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: colors.pageBackGround,
  },
  svgRight: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: colors.secondBlue,
  },
  txtAxisY: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
    marginBottom: 13,
    width: 24,
    height: 16,
  },
  axisYView: {
    marginLeft: 16,
    width: 24,
    position: "absolute",
  },
  axisXView: {
    marginTop: 11,
    flexDirection: "row",
    marginLeft: 39,
    position: "absolute",
  },
  chartItemView: {
    flexDirection: "row",
    marginLeft: 39,
    position: "absolute",
    alignItems: "flex-end",
  },
  txtAxisX: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
    marginRight: 20,
    width: 24,
    height: 16,
  },
  btnView: {
    width: "100%",
    height: 40,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.pageBackGround,
    flexDirection: "row",
  },
  btn1: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: colors.pageBackGround,
  },
  btn2: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: colors.pageBackGround,
  },
  txtSeeDetails: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 14,
    color: colors.silverChalice,
  },
  txtSetGoals: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 14,
    color: colors.classicBlue,
  },
  chartItem: {
    width: 4,
    backgroundColor: colors.secondBlue,
    marginRight: 30,
    marginLeft: 9,
    borderRadius: 4,
  },
  svgCircle: {
    alignSelf: "center",
    marginTop: 24,
    width: 140,
    height: 140,
    alignItems: "center",
  },
  txtGlycemicIndex: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 32,
    lineHeight: 51,
    textAlign: "center",
    color: colors.classicBlue,
    position: "absolute",
    top: 45,
  },
  txtMgdl: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 17,
    color: colors.silverChalice,
  },
  conditionIndexView: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 8,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 21,
  },
  lineVertical: {
    width: 1,
    height: 176,
    backgroundColor: colors.pageBackGround,
    alignSelf: "center",
    position: "absolute",
    right: "50%",
    top: 24,
    bottom: 24,
  },
  lineHorizontal: {
    left: 24,
    right: 24,
    height: 1,
    backgroundColor: colors.pageBackGround,
    alignSelf: "center",
    position: "absolute",
  },
});
