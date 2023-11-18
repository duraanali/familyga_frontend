import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  const { color } = props;
  return (
    <Svg width={5} height={8} viewBox="0 0 5 8" fill="none" {...props}>
      <Path
        d="M3.335 4L.512 1.177a.69.69 0 01.975-.975l3.31 3.31a.69.69 0 010 .976l-3.31 3.31a.69.69 0 11-.975-.975L3.335 4z"
        fill={color ? color : '#ABA4AC'}
      />
    </Svg>
  );
}

const SvgRightArrow = React.memo(SvgComponent);
export default SvgRightArrow;
