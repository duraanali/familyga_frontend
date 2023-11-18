import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.698 19.404C18.034 17.431 16.198 16 14 16h-4c-2.198 0-4.032 1.432-4.696 3.405C3.281 17.574 2 14.937 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10c0 2.936-1.28 5.573-3.302 7.404zM8 9a4 4 0 018 0v1a4 4 0 01-8 0V9z"
        fill={props.color}
      />
    </Svg>
  );
}

const SvgUserProfileInactive = React.memo(SvgComponent);
export default SvgUserProfileInactive;
