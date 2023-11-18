import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0c-.414 0-.75.306-.75.684V3.25H.684C.306 3.25 0 3.586 0 4s.306.75.684.75H3.25v2.566c0 .378.336.684.75.684s.75-.306.75-.684V4.75h2.566C7.694 4.75 8 4.414 8 4s-.306-.75-.684-.75H4.75V.684C4.75.306 4.414 0 4 0z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgAdd = React.memo(SvgComponent);
export default SvgAdd;
