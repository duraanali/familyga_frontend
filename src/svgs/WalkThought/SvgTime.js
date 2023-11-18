import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm5.25.75H9v-1.5H6.75V3h-1.5v3.75z"
        fill="#0084F4"
      />
    </Svg>
  );
}

const SvgTime = React.memo(SvgComponent);
export default SvgTime;
