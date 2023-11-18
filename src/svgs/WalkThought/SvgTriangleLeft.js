import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M12.06.18A.901.901 0 0113.5.9v16.2a.901.901 0 01-1.44.72l-10.8-8.1a.898.898 0 010-1.44l10.8-8.1z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgTriangleLeft = React.memo(SvgComponent);
export default SvgTriangleLeft;
