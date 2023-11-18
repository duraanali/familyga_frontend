import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 9.335l2.823-2.823a.69.69 0 11.975.975l-3.31 3.31a.69.69 0 01-.976 0l-3.31-3.31a.69.69 0 11.975-.975L8 9.335z"
        fill="#ABA4AC"
      />
    </Svg>
  );
}

const SvgArrowDown = React.memo(SvgComponent);
export default SvgArrowDown;
