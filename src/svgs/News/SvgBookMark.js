import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.052 1.662c0 .266.227.483.506.483h6.715c.395 0 .715.305.715.682v9.322c0 .267.226.483.506.483s.506-.216.506-.483V2.827c0-.91-.773-1.648-1.727-1.648H5.558a.495.495 0 00-.506.483zm1.727 9.915L2.8 14.289c-.335.229-.8 0-.8-.393V5.157c0-.91.773-1.648 1.727-1.648H9.83c.954 0 1.727.738 1.727 1.648v8.74c0 .392-.465.62-.8.392L6.78 11.577zm3.767 1.38v-7.8c0-.377-.32-.682-.715-.682H3.727c-.395 0-.715.305-.715.682v7.8l3.473-2.367a.526.526 0 01.588 0l3.473 2.368z"
        fill="#433246"
      />
    </Svg>
  );
}

const SvgBookMark = React.memo(SvgComponent);
export default SvgBookMark;
