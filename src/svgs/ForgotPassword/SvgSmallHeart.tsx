import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function SvgComponent({ color, width = 32, height = 32, ...props }: Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M15.848 9.537s3.042-11.811 12.624-5.58c0 0 7.802 6.871-3.286 15.11-3.5 3.056-7.101 7.853-4.925 12.933 0 0-16.749-7.283-19.386-19.71 0 0-2.64-11.41 6.09-12.182 0 0 7.494-1.813 8.883 9.429z"
        fill={color ? color : "#4B66EA"}
      />
    </Svg>
  );
}

const SvgSmallHeart = React.memo(SvgComponent);
export default SvgSmallHeart;
