import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={47} height={48} viewBox="0 0 47 48" fill="none" {...props}>
      <Path
        d="M42.708 5.936s11.703 10.306-4.93 22.663c-5.25 4.586-10.65 11.78-7.386 19.401 0 0-25.123-10.925-29.08-29.564 0 0-3.958-17.115 9.136-18.274 0 0 11.24-2.72 13.324 14.143 0 0 4.563-17.716 18.936-8.37z"
        fill={props.color ? props.color : "#4B66EA"}
      />
    </Svg>
  );
}

const SvgHeart = React.memo(SvgComponent);
export default SvgHeart;
