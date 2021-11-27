import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M151 226 c-6 -7 -9 -20 -6 -27 7 -19 -80 -104 -107 -104 -11 0 -26
-8 -32 -17 -9 -15 -5 -24 22 -50 27 -27 35 -31 50 -21 9 6 16 20 15 30 -3 25
81 108 109 108 11 0 26 8 32 17 8 14 5 23 -19 48 -32 33 -47 37 -64 16z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
