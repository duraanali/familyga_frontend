import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  const { color } = props;
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={color ? color : '#0F4C81'}
      />
    </Svg>
  );
}

const SvgOption = React.memo(SvgComponent);
export default SvgOption;
