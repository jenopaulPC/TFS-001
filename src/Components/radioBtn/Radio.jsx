import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";

const Radio = ({ data = [], disabled = false, onChange }) => {
  return (
    <div>
      {data.map((val, index) => (
        <div key={index}>
          <Input
            type="radio"
            name={val.name}
            id={val.label}
            value={val.label}
            onChange={onChange}
            disabled={val.label === "" ? true : disabled}
            style={{
              boxShadow: "none",
            }}
          />
          {val.label !== "" ? (
            <label htmlFor={val.label}> {val.label} </label>
          ) : (
            <p style={{ color: "red", fontSize: "10px" }}>
              {" "}
              Please enter a label{" "}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Radio;
