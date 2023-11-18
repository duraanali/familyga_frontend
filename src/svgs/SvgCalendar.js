import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.333 2h1.334c.368 0 .666.299.666.667v8a.667.667 0 01-.666.666H1.333a.667.667 0 01-.666-.666v-8c0-.368.298-.667.666-.667h1.334V.667h2V2h2.666V.667h2V2zM2 10h8V4H2v6zm1.333-4.667h1.334v1.334H3.333V5.333zm3.334 0H5.333v1.334h1.334V5.333z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgCalendar = React.memo(SvgComponent);
export default SvgCalendar;
