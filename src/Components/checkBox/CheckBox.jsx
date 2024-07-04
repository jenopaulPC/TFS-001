import React, { useState } from "react";
import { Input } from "reactstrap";

const CheckBox = ({
  label = "",
  onChange = () => {},
  disabled = false,
  style = "",
}) => {
  return (
    <div>
      <Input
        type="checkbox"
        style={{ boxShadow: "none", ...style }}
        onChange={onChange}
        disabled={disabled}
      />
      <label
        htmlFor=""
        style={{ userSelect: disabled && "none", color: disabled && "gray" }}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
