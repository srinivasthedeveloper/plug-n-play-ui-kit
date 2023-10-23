import React from "react";
import styled, { ThemeProvider } from "styled-components";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

// Define your themes
const lightTheme = {
  primaryColor: "#007BFF",
  textColor: "#333",
};

const darkTheme = {
  primaryColor: "#FFC107",
  textColor: "#fff",
};

// Create a styled button
const SButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

// Create a ThemeToggle component to switch themes
const ThemeToggle = ({ setTheme }:any) => (
  <div>
    <button onClick={() => setTheme("light")}>Light Theme</button>
    <button onClick={() => setTheme("dark")}>Dark Theme</button>
  </div>
);

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <ThemeToggle setTheme={setTheme} />
        <SButton type="button" style={{ backgroundColor }} {...props}>
          {label}
        </SButton>
      </div>
    </ThemeProvider>
  );
};
