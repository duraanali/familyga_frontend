import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={5} height={8} viewBox="0 0 5 8" fill="none" {...props}>
      <Path
        d="M1.665 4l2.823 2.823a.69.69 0 11-.976.975l-3.31-3.31a.69.69 0 010-.976l3.31-3.31a.69.69 0 01.976.975L1.665 4z"
        fill={props.color ? props.color : '#FFF'}
      />
    </Svg>
  );
}

const SvgBackArrow = React.memo(SvgComponent);
export default SvgBackArrow;
