import { forwardRef } from "react";
import { ButtonProps } from "./types";
import { SButton } from "./styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, variant = "primary", ...props }, ref) => {
    return (
      <SButton variant={variant} ref={ref} {...props}>
        {label}
      </SButton>
    );
  }
);

export { Button };
