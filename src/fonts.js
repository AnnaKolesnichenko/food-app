// fonts.js

import { css } from "styled-components";

import TRegularFont from "./data/fonts/Teachers-Regular.ttf";
import TMediumFont from "./data/fonts/Teachers-Medium.ttf";
import TBoldFont from "./data/fonts/Teachers-Bold.ttf";

import NLightFont from "./data/fonts/Nunito-Light.ttf";
import NRegularFont from "./data/fonts/Nunito-Regular.ttf";
import NMediumFont from "./data/fonts/Nunito-Medium.ttf";
import NSemiBoldFont from "./data/fonts/Nunito-SemiBold.ttf";
import NBoldFont from "./data/fonts/Nunito-Bold.ttf";

export const TeachersFontRegular = css`
  @font-face {
    font-family: "Teachers";
    src: url(${TRegularFont}) format("ttf");
    font-weight: 400;
    font-style: normal;
  }
`;

export const TeachersFontMedium = css`
  @font-face {
    font-family: "Teachers";
    src: url(${TMediumFont}) format("ttf");
    font-weight: 500; /* Adjust the font weight as needed */
    font-style: normal;
  }
`;

export const TeachersFontSemibold = css`
  @font-face {
    font-family: "Teachers";
    src: url(${TBoldFont}) format("ttf");
    font-weight: 600; /* Adjust the font weight as needed */
    font-style: normal;
  }
`;

export const NunitoLight = css`
  @font-face {
    font-family: "Nunito";
    src: url(${NLightFont}) format("ttf");
    font-weight: 300;
    font-style: normal;
  }
`;

export const NunitoMedium = css`
  @font-face {
    font-family: "Nunito";
    src: url(${NMediumFont}) format("ttf");
    font-weight: 500;
    font-style: normal;
  }
`;

export const NunitoRegular = css`
  @font-face {
    font-family: "Nunito";
    src: url(${NRegularFont}) format("ttf");
    font-weight: 400;
    font-style: normal;
  }
`;

export const NunitoSemiBold = css`
  @font-face {
    font-family: "Nunito";
    src: url(${NSemiBoldFont}) format("ttf");
    font-weight: 500;
    font-style: normal;
  }
`;

export const NunitoBold = css`
  @font-face {
    font-family: "Nunito";
    src: url(${NBoldFont}) format("ttf");
    font-weight: 600;
    font-style: normal;
  }
`;

// Export the font families for use in styled-components
export const TeachersFonts = {
  Regular: "Teachers",
  Medium: "Teachers",
  Semibold: "Teachers",
  Bold: "Teachers",
};

export const NunitoFonts = {
  Light: "Nunito",
  Regular: "Nunito",
  Medium: "Nunito",
  SemiBold: "Nunito",
  Bold: "Nunito",
};
