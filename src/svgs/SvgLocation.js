import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function SvgComponent(props: Props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 12}
      height={height ? height : 14}
      viewBox="0 0 12 14"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.2c0-3.343 2.657-6 6-6s6 2.657 5.914 6c0 1.629-.6 3.171-1.8 4.286 0 .064-1.965 1.805-2.992 2.716l-.608.54c-.257.258-.771.258-1.114 0-.043-.042-.921-.835-1.8-1.628a382.834 382.834 0 01-1.8-1.628C.6 9.37 0 7.829 0 6.2zm4.286 0A1.72 1.72 0 006 7.914 1.72 1.72 0 007.714 6.2 1.72 1.72 0 006 4.486 1.72 1.72 0 004.286 6.2z"
        fill={props.color ? props.color : '#F23A56'}
      />
    </Svg>
  );
}

const SvgLocation = React.memo(SvgComponent);
export default SvgLocation;
