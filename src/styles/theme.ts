import { DefaultTheme } from "styled-components";

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

export const theme: DefaultTheme = {
  bgColor: "#181818",
  textColor: "#ece6cc ",
  accentColor: "#38243B",
  activeColor: "red",
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};
