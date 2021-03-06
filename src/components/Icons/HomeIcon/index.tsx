import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  fill: string;
}

const HomeIcon: React.FC<CustomSvgProps> = ({fill = '#fff', ...rest}) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5287 0L20 9.19176L18.9427 10.317L17.4386 8.86529V19.2076L16.694 20H12.2264L11.4818 19.2076V13.6609H8.50335V19.2076L7.75875 20H3.29114L2.54654 19.2076V8.87797L1.05733 10.317L0 9.19176L9.45644 0H10.5287ZM4.03574 7.4374V18.4152H7.01415V12.8685L7.75875 12.0761H12.2264L12.971 12.8685V18.4152H15.9494V7.42789L9.99255 1.67987L4.03574 7.4374Z"
        fill={fill}
      />
    </Svg>
  );
};

export {HomeIcon};
