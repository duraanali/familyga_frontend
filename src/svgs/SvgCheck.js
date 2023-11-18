import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 10}
      height={height ? height : 8}
      viewBox="0 0 10 8"
      fill="none"
      {...props}>
      <Path
        d="M8.494.758a.882.882 0 111.248 1.248L4.447 7.3a.882.882 0 01-1.247 0L.258 4.36A.882.882 0 111.506 3.11L3.824 5.43l4.67-4.67z"
        fill="#1A051D"
      />
    </Svg>
  );
}

const SvgCheck = React.memo(SvgComponent);
export default SvgCheck;
