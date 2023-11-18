import * as React from 'react';
import Svg, { G, Circle, Defs } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={25} cy={21} r={15} fill="#4F6DE6" />
        <Circle cx={25} cy={21} r={13.5} stroke="#fff" strokeWidth={3} />
      </G>
      <Defs />
    </Svg>
  );
}

const SvgUserLocation = React.memo(SvgComponent);
export default SvgUserLocation;
