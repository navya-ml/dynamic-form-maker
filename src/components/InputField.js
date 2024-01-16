import React, { useState } from "react";
import styled from "styled-components";

import { useFormContext } from "../FormContext.js";

const FormControl = styled.div`
  margin-top: 5px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
   width: "50%";
   padding-right: 16px;
 box-sizing: border-box;
`;

const Input = styled.input`

  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
   width: "50%";
  box-sizing: border-box;
  
`;

const Tooltip = styled.span`
  margin-left: 6px;
  background-color: #b0b0d1;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 25px;
`;

const InputField = ({ schema }) => {
  const { updateFormData } = useFormContext();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    updateFormData(schema.jsonKey, newValue);
  };

  return (
    <FormControl>
      <FormLabel>
        {schema.label}
        {schema.description.length > 0 && (
          <Tooltip>{schema.description}</Tooltip>
        )}
      </FormLabel>
      <Input
        value={value}
        onChange={handleChange}
        placeholder={schema.placeholder}
        name={schema.jsonKey ? schema.jsonKey : ""}
        required={schema.validate?.required}
      />
    </FormControl>
  );
};

export default InputField;

