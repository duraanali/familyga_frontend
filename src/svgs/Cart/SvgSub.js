import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={9} height={3} viewBox="0 0 9 3" fill="none" {...props}>
      <Path d="M.26 2.96V.404h7.92V2.96H.26z" fill="#696969" />
    </Svg>
  );
}

const SvgSub = React.memo(SvgComponent);
export default SvgSub;
