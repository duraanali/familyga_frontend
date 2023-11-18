import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3h14c.499 0 .895.372.97.851L8 9.102.03 3.851A.988.988 0 011 3zm-1 8.992V5.028l5.394 3.554L0 11.992zm9.69-2.806l-1.415.932a.5.5 0 01-.55 0L6.31 9.185.032 13.156A.986.986 0 001 14h14a.986.986 0 00.968-.844L9.69 9.186zM16 11.992l-5.394-3.41L16 5.028v6.964z"
        fill="#6D5F6F"
      />
    </Svg>
  );
}

const SvgEmail = React.memo(SvgComponent);
export default SvgEmail;
