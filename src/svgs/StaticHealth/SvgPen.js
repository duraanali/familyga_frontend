import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.938 3.188l1.874 1.874c.25.25.25.625 0 .875l-1.124 1.125-2.75-2.75 1.124-1.125c.25-.25.626-.25.876 0zm-7.75 6.874l4.874-4.874 2.75 2.75-4.874 4.875A.567.567 0 015.5 13H3.625C3.25 13 3 12.75 3 12.375V10.5c0-.188.063-.313.188-.438z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgPen = React.memo(SvgComponent);
export default SvgPen;
