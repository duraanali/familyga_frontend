import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

function SvgComponent(props: Props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 14}
      height={height ? height : 14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}>
      <Path
        d="M8.75 5.25L7 .224 5.25 5.25H0L4.279 8.6l-1.682 5.176L7 10.577l4.403 3.199L9.721 8.6 14 5.25H8.75z"
        fill="#FFA26B"
      />
    </Svg>
  );
}

const SvgStar = React.memo(SvgComponent);
export default SvgStar;
