import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={120} height={1} viewBox="0 0 120 1" fill="none" {...props}>
      <Path fill="#F7F8F9" d="M0 0h120v1H0z" />
    </Svg>
  );
}

const SvgLine = React.memo(SvgComponent);
export default SvgLine;
