import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  fill: string;
}

const ChevronDown: React.FC<CustomSvgProps> = ({fill = '#231E25', ...rest}) => {
  return (
    <Svg width={12} height={7} viewBox="0 0 12 7" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.903264 0.46967C1.19616 0.176777 1.67103 0.176777 1.96392 0.46967L5.93359 4.43934L9.90326 0.46967C10.1962 0.176777 10.671 0.176777 10.9639 0.46967C11.2568 0.762563 11.2568 1.23744 10.9639 1.53033L6.46392 6.03033C6.17103 6.32322 5.69616 6.32322 5.40326 6.03033L0.903264 1.53033C0.61037 1.23744 0.61037 0.762563 0.903264 0.46967Z"
        fill={fill}
      />
    </Svg>
  );
};

export {ChevronDown};
