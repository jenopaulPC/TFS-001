import React, { useState } from "react";
import { InputGroup, InputGroupText, Input as RsInput } from "reactstrap";
import "./Input.css";

const Input = ({
  id = "",
  placeholder = "",
  beforeText = "",
  afterText = "",
  type = "text",
  onChange,
  disabled = false,
  size = "md",
  value = "",
}) => {
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  const exceptThisSymbols = ["e", "E", "+", "-", "."];

  return (
    <div>
      <InputGroup>
        {beforeText && <InputGroupText>{beforeText}</InputGroupText>}
        <RsInput
          placeholder={placeholder}
          id={id}
          className="input"
          type={isEyeClicked ? "text" : type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          size={size}
          onKeyDown={(e) => {
            type === "number" &&
              exceptThisSymbols.includes(e.key) &&
              e.preventDefault();
          }}
        />
        {type === "password" && (
          <InputGroupText
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsEyeClicked(!isEyeClicked);
            }}
          >
            {isEyeClicked ? (
              <i class="bi bi-eye"></i>
            ) : (
              <i class="bi bi-eye-slash"></i>
            )}
          </InputGroupText>
        )}
        {afterText && <InputGroupText>{beforeText}</InputGroupText>}
      </InputGroup>
    </div>
  );
};

export default Input;
