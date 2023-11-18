import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
      <Path
        d="M5.002 6L.768 1.766A1.034 1.034 0 112.231.303l4.966 4.966a1.034 1.034 0 010 1.462L2.23 11.697a1.034 1.034 0 11-1.463-1.463L5.002 6z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgArrowRight = React.memo(SvgComponent);
export default SvgArrowRight;
