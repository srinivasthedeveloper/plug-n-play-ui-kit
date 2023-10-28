import commonTheme from "./common-theme";

const darkTheme = {
  colors: {
    primary: "#fff",
    secondary: "#6C757D",
    background: "#000000",
    text: "#000",
    boxShadowColor:  "#fff2",
  },
  border:{
    normal: "1px solid #fff",
  },
  boxShadow: {
    normal: "0px 6px 8px #fff2",
  },
  typography: {
    ...commonTheme.typography,
  },
  padding: {
    ...commonTheme.padding,
  },
  layout:{
    ...commonTheme.layout
  },
  gap:{
    ...commonTheme.gap
  }
};

export default darkTheme;
