import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 0h-15A4.5 4.5 0 000 4.5v15A4.5 4.5 0 004.5 24h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0019.5 0zM7.385 11.077L3.692 6.46S6.462 2.77 12 2.77s8.308 3.692 8.308 3.692l-3.693 4.616h-9.23zm8.29-6.452l-1.263 5.529h-2.394l3.658-5.53z"
        fill="#00C48C"
      />
    </Svg>
  );
}

const SvgShape = React.memo(SvgComponent);
export default SvgShape;
