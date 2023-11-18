import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
      <Path
        d="M5.747 2.38a.441.441 0 01.624.623L3.724 5.65a.441.441 0 01-.624 0L1.63 4.18a.441.441 0 01.623-.624l1.159 1.158L5.747 2.38z"
        fill="#1A051D"
      />
    </Svg>
  );
}

const SvgDone = React.memo(SvgComponent);
export default SvgDone;
