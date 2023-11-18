import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M5.75 2.763L2.267 3.808A.375.375 0 002 4.167v9.75l3.75-1.371V2.763z"
        fill="#fff"
      />
      <Path d="M9.5 3.988l-3-1.2v9.807l3 1.2V3.989z" fill="#ABA4AC" />
      <Path
        d="M14 2.667l-3.75 1.37v9.784l3.483-1.045a.375.375 0 00.267-.36v-9.75z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgMap = React.memo(SvgComponent);
export default SvgMap;
