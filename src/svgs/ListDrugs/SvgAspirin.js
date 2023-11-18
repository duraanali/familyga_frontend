import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16c0 8.823 7.178 16 16 16 8.823 0 16-7.177 16-16 0-2.833-.75-5.616-2.17-8.05a16.09 16.09 0 00-5.701-5.734A15.91 15.91 0 0016 0C7.178 0 0 7.178 0 16zm2.58 0C2.58 8.6 8.6 2.58 16 2.58a13.477 13.477 0 013.398.434 13.35 13.35 0 013.419 1.423A13.49 13.49 0 0129.42 16c0 7.4-6.02 13.42-13.42 13.42S2.58 23.4 2.58 16zm20.206 3.346H9.216A3.35 3.35 0 015.868 16a3.35 3.35 0 013.346-3.346h13.571A3.35 3.35 0 0126.132 16a3.35 3.35 0 01-3.346 3.346zM8.448 16c0-.415.351-.766.767-.766h13.57c.416 0 .767.35.767.766a.777.777 0 01-.767.766H9.215A.776.776 0 018.448 16z"
        fill="#4B66EA"
      />
    </Svg>
  );
}

const SvgAspirin = React.memo(SvgComponent);
export default SvgAspirin;
