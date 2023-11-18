import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: boolean;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.275.725a.625.625 0 00-.884 0L7 6.116 1.608.725a.625.625 0 00-.883.884L6.116 7 .725 12.391a.625.625 0 00.883.884L7 7.884l5.391 5.391a.625.625 0 10.884-.884L7.884 7l5.391-5.391a.625.625 0 000-.884z"
        fill={props.color ? '#FFF' : '#0F4C81'}
      />
    </Svg>
  );
}

const SvgClose = React.memo(SvgComponent);
export default SvgClose;
