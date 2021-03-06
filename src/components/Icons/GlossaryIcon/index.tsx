import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  fill: string;
}

const GlossaryIcon: React.FC<CustomSvgProps> = ({fill = '#fff', ...rest}) => {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none" {...rest}>
      <Path
        d="M14.8333 1V11L11.5 8.5L8.16667 11V1M1.50001 20.1667C1.49863 19.838 1.56235 19.5123 1.6875 19.2084C1.81265 18.9044 1.99675 18.6283 2.22917 18.3958C2.46159 18.1634 2.73773 17.9793 3.04167 17.8542C3.34561 17.729 3.67132 17.6653 4.00001 17.6667H18.1667V1.00002H4.00001C3.67132 0.998644 3.34561 1.06237 3.04167 1.18752C2.73773 1.31266 2.46159 1.49676 2.22917 1.72918C1.99675 1.9616 1.81265 2.23775 1.6875 2.54169C1.56235 2.84562 1.49863 3.17133 1.50001 3.50002V20.1667ZM1.50001 20.1667L1.50001 21H16.5"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export {GlossaryIcon};
