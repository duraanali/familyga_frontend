import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.51 1.49a.25.25 0 00-.353 0L4 3.646 1.843 1.49a.25.25 0 00-.353.353L3.646 4 1.49 6.157a.25.25 0 00.353.353L4 4.354 6.157 6.51a.25.25 0 00.353-.353L4.354 4 6.51 1.843a.25.25 0 000-.353z"
        fill="#ABA4AC"
      />
    </Svg>
  );
}

const SvgCancel = React.memo(SvgComponent);
export default SvgCancel;
