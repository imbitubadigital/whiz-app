import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  fill: string;
}

const HerbolodyIcon: React.FC<CustomSvgProps> = ({
  fill = '#AA9DAF',
  ...rest
}) => {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0606 5.26904C12.3202 5.52864 12.3202 5.94954 12.0606 6.20914L2.08939 16.1804C1.82979 16.44 1.40889 16.44 1.14929 16.1804C0.88969 15.9208 0.88969 15.4999 1.14929 15.2403L11.1205 5.26904C11.3801 5.00944 11.801 5.00944 12.0606 5.26904Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.09904 13.2305C7.14761 14.9949 10.083 14.6354 12.2178 12.6478C14.351 10.6617 15.7978 6.94234 15.6086 1.72091C10.3872 1.53168 6.66778 2.97856 4.68176 5.11169C2.69414 7.24655 2.3346 10.1819 4.09904 13.2305ZM3.70871 4.20575C6.13497 1.59976 10.5172 0.0829264 16.2829 0.422085C16.6193 0.441873 16.8876 0.71025 16.9074 1.04665C17.2466 6.81235 15.7298 11.1945 13.1238 13.6208C10.4727 16.0891 6.81928 16.4146 3.27157 14.286C3.178 14.2298 3.0997 14.1515 3.04356 14.058C0.914929 10.5102 1.24042 6.85687 3.70871 4.20575Z"
        fill={fill}
      />
    </Svg>
  );
};

export {HerbolodyIcon};
