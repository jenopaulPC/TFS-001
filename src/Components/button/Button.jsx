import React from "react";
import { Button as RsButton } from "reactstrap";

const Button = ({
  text="",
  size = "md",
  className = "",
  color = "secondary",
  onClick = () => {},
  disabled = false,
  outline = false,
  block=false,
}) => {
  return (
    <div>
      <RsButton
        className={`rounded ${className}`}
        size={`${size}`}
        color={`${color}`}
        onClick={onClick}
        disabled={disabled}
        outline={outline}
        block={block}
        style={{boxShadow: "none"}}
      >
        {text}
      </RsButton>
    </div>
  );
};

export default Button;
