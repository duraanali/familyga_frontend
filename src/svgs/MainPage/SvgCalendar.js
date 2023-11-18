import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6h2a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h2V4h3v2h4V4h3v2zM6 18h12V9H6v9zm2-7h2v2H8v-2zm5 0h-2v2h2v-2z"
        fill={props.color ? props.color : '#FFA26B'}
      />
    </Svg>
  );
}

const SvgCalendar = React.memo(SvgComponent);
export default SvgCalendar;
