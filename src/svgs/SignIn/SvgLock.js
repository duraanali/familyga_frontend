import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={16} viewBox="0 0 12 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.667 6h-1V4.667A4.672 4.672 0 006 0a4.672 4.672 0 00-4.667 4.667V6h-1A.333.333 0 000 6.333v8.334C0 15.402.598 16 1.333 16h9.334c.735 0 1.333-.598 1.333-1.333V6.333A.333.333 0 0011.667 6zm-4.669 6.963a.334.334 0 01-.331.37H5.333a.333.333 0 01-.331-.37l.21-1.89A1.319 1.319 0 014.667 10c0-.735.598-1.333 1.333-1.333S7.333 9.265 7.333 10c0 .431-.204.824-.545 1.072l.21 1.891zM3.333 4.667V6h5.334V4.667A2.67 2.67 0 006 2a2.67 2.67 0 00-2.667 2.667z"
        fill="#6D5F6F"
      />
    </Svg>
  );
}

const SvgLock = React.memo(SvgComponent);
export default SvgLock;
