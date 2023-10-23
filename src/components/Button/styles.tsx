import styled, { css } from "styled-components";
import { ButtonStyleProps } from "./types";

const SButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  text-align: center;
  border: none;
  font-weight: ${({ theme, fontWeight = "normal" }) =>
    theme.typography.weight[fontWeight]};
  font-size: ${({ theme, fontSize, size = "medium" }) =>
    theme.typography.size[fontSize ?? size]};
  font-style: ${({ theme, fontStyle = "normal" }) =>
    theme.typography.style[fontStyle]};
  padding: ${({ size = "medium", theme }) => theme.padding[size]};
  border-radius: ${({ shape = "box" }) => (shape === "oval" ? "500px" : "4px")};

  ${({ variant, theme, backgroundColor }) =>
    variant === "primary" &&
    css`
      background-color: ${backgroundColor ?? theme.colors.primary};
      color: ${theme.colors.text};
    `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: transparent;
      border: ${theme.border.normal};
      color: ${theme.colors.primary};
    `}

  ${({ variant, theme }) =>
    variant === "text" &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary};
    `}

  ${({ variant, theme }) =>
    variant === "link" &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary};
      text-decoration: underline;
    `}

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    transform: scale(1.05);
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    filter: grayscale(1);
    cursor: not-allowed;
    opacity: 0.8;
  }

  transition: all 0.2s ease;
`;

export { SButton };
