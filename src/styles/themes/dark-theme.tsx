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
  typography: {
    ...commonTheme.typography,
  },
  padding: {
    ...commonTheme.padding,
  },
  boxShadow: {
    normal: "0px 6px 8px #fff2",
  }
};

export default darkTheme;
