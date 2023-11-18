import * as React from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  percentage?: number;
  startAnim?: boolean;
}

function SvgComponent(props: Props) {
  const { percentage, startAnim } = props;

  const animated = React.useRef(new Animated.Value(0)).current;
  const opacity = 1;
  const radius = 65;
  const duration = 500;
  const strokeWidth = 6;
  const haftCircle = radius + strokeWidth;
  const max = 100;
  const circleCircumference = 2 * Math.PI * radius;

  const circleRef = React.useRef();

  const animation = (toValue, start) => {
    return (
      start &&
      Animated.timing(animated, {
        toValue,
        duration,
        delay: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start()
    );
  };

  React.useEffect(() => {
    animation(percentage, startAnim);
    animated.addListener((v) => {
      if (circleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${haftCircle * 2} ${haftCircle * 2}`}
      {...props}
    >
      <G rotation={"-90"} origin={`${haftCircle},${haftCircle}`}>
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#6979F8"
          strokeLinecap={"round"}
          strokeWidth={strokeWidth}
          strokeOpacity={0.1}
          fill={"transparent"}
        />
        <AnimatedCircle
          ref={circleRef}
          opacity={opacity}
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#6979F8"
          strokeLinecap={"round"}
          strokeWidth={strokeWidth}
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleCircumference}
        />
      </G>
    </Svg>
  );
}

const SvgCircle = React.memo(SvgComponent);
export default SvgCircle;
