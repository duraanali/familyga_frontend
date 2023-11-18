import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={19} height={10} viewBox="0 0 19 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 8.334L1.37.642a.528.528 0 00-.72 0c-.2.189-.2.492 0 .682L9.14 9.358c.2.19.52.19.72 0l8.488-8.034a.458.458 0 000-.678.528.528 0 00-.72 0l-8.13 7.688z"
        fill="#E5E5E5"
      />
    </Svg>
  );
}

const SvgArrowDown = React.memo(SvgComponent);
export default SvgArrowDown;
