import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={19} viewBox="0 0 24 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.637 14.337L1.911 8.658 0 10.547l7.637 7.575L24 1.895 22.096 0 7.637 14.337z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgAccept = React.memo(SvgComponent);
export default SvgAccept;
