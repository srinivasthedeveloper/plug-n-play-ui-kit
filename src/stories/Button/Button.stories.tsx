import { Meta } from "@storybook/react";
import { useRef } from "react";
import { Button, ButtonProps } from "../../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// Define a default story with default args
const Default = (args: ButtonProps) => <Button {...args} />;
Default.args = {
  size: "medium",
  shape: "box",
  fontWeight: "normal",
  fontSize: "medium",
  fontStyle: "normal",
  variant: "primary",
  label: "Button",
};

const SmallPrimaryBox = Default.bind({});
SmallPrimaryBox.args = {
  size: "small",
  shape: "box",
  fontWeight: "normal",
  fontSize: "small",
  fontStyle: "normal",
  variant: "primary",
  label: "Small Primary Box Button",
};

const MediumSecondaryOval = Default.bind({});
MediumSecondaryOval.args = {
  size: "medium",
  shape: "oval",
  fontWeight: "normal",
  fontSize: "medium",
  fontStyle: "normal",
  variant: "secondary",
  label: "Medium Secondary Oval Button",
};

const LargeTextBoldItalic = Default.bind({});
LargeTextBoldItalic.args = {
  size: "large",
  shape: "box",
  fontWeight: "bold",
  fontSize: "large",
  fontStyle: "italic",
  variant: "text",
  label: "Large Text Bold Italic Button",
};

const SmallLinkNormal = Default.bind({});
SmallLinkNormal.args = {
  size: "small",
  shape: "box",
  fontWeight: "normal",
  fontSize: "small",
  fontStyle: "normal",
  variant: "link",
  label: "Small Link Normal Button",
};

const PrimaryIconButton = Default.bind({});
PrimaryIconButton.args = {
  shape: "oval",
  label: "PrimaryIconButton",
  leftIcon: <span>+</span>,
  rightIcon: <span>-</span>,
} as any;

const ButtonWithRef: any = (args: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const label = args.label ?? "Button With Ref";
  return (
    <div style={{display:'flex', gap: "5px", flexDirection:'column'}}>
    <span style={{background:'#fff',padding:'4px'}}>ButtonA has a ref and will console log on click action</span>
    <span style={{background:'#fff',padding:'4px'}}>ButtonB has a onclick function which triggers buttonA onclick action</span>
    <div style={{display:'flex', gap: "16px"}}>
      <Button
        ref={buttonRef}
        shape="oval"
        onClick={() => console.log("Button With Ref Clicked")}
        onFocus={() => console.log("Button With Ref Focused")}
        onBlur={() => console.log("Button With Ref Blurred")}
        onDoubleClick={() => console.log("Button With Ref Double Clicked")}
        {...args}
        label={label}
      />
      <Button
        variant="secondary"
        onClick={() => buttonRef.current?.click()}
        {...args}
        label={"Click to Trigger Button With Ref"}
      />
    </div>
    </div>
  );
};

export {
  Default,
  SmallPrimaryBox,
  MediumSecondaryOval,
  LargeTextBoldItalic,
  SmallLinkNormal,
  PrimaryIconButton,
  ButtonWithRef,
  meta as default,
};
