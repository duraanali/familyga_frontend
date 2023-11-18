import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function SvgComponent(props: Props) {
  const { color, width, height } = props;
  return (
    <Svg
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 0H3a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3zM4.923 7.385L2.462 4.308S4.308 1.846 8 1.846s5.539 2.462 5.539 2.462l-2.462 3.077H4.923zm5.527-4.302L9.608 6.77H8.012l2.438-3.686z"
        fill={color ? color : '#FFA26B'}
      />
    </Svg>
  );
}

const SvgScale = React.memo(SvgComponent);
export default SvgScale;
