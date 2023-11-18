import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        d="M9.44 3.314v2.79H6.326V9.29H3.374V6.104H.26v-2.79h3.114V.11h2.952v3.204H9.44z"
        fill="#3F67E6"
      />
    </Svg>
  );
}

const SvgAdd = React.memo(SvgComponent);
export default SvgAdd;
