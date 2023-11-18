import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4c-.414 0-.75.306-.75.684V7.25H4.684C4.306 7.25 4 7.586 4 8s.306.75.684.75H7.25v2.566c0 .378.336.684.75.684s.75-.306.75-.684V8.75h2.566c.378 0 .684-.336.684-.75s-.306-.75-.684-.75H8.75V4.684C8.75 4.306 8.414 4 8 4z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgAdd = React.memo(SvgComponent);
export default SvgAdd;
