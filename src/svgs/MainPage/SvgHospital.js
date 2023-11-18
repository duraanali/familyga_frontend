import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.875 1.5h12.25c.525 0 .875.35.875.875v19.25c0 .525-.35.875-.875.875h-5.25V19h-1.75v3.5h-5.25c-.525 0-.875-.35-.875-.875V2.375c0-.525.35-.875.875-.875zm1.75 14.875h2.625v-1.75H7.625v1.75zm2.625-3.5H7.625v-1.75h2.625v1.75zm-2.625-3.5h2.625v-1.75H7.625v1.75zm2.625-3.5H7.625v-1.75h2.625v1.75zm3.5 10.5h2.625v-1.75H13.75v1.75zm2.625-3.5H13.75v-1.75h2.625v1.75zm-2.625-3.5h2.625v-1.75H13.75v1.75zm2.625-3.5H13.75v-1.75h2.625v1.75zM3.25 21.625v-8.75h-.875c-.525 0-.875.35-.875.875v7.875c0 .525.35.875.875.875h.875v-.875zm17.5.875h.875c.525 0 .875-.35.875-.875V13.75c0-.525-.35-.875-.875-.875h-.875V22.5z"
        fill="#00C48C"
      />
    </Svg>
  );
}

const SvgHospital = React.memo(SvgComponent);
export default SvgHospital;
