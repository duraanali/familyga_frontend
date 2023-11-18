import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M1.94.18A.901.901 0 00.5.9v16.2a.901.901 0 001.44.72l10.8-8.1a.898.898 0 000-1.44L1.94.18z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgTriangleRight = React.memo(SvgComponent);
export default SvgTriangleRight;
