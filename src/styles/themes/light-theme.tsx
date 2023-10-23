import commonTheme from "./common-theme";

const lightTheme = {
  colors: {
    primary: "#000",
    secondary: "#6C757D",
    background: "#FFFFFF",
    text: "#fff",
    boxShadowColor:  "#0002",
  },
  border:{
    normal: "1px solid #000",
  },
  typography: {
    ...commonTheme.typography,
  },
  padding: {
    ...commonTheme.padding,
  },
  boxShadow: {
    normal: "0px 6px 8px #0002",
  }
};

export default lightTheme;
