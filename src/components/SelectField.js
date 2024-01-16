import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "../FormContext.js";

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormControl = styled.div`
  margin-top: 5px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const SelectField = ({ schema }) => {
  const { updateFormData } = useFormContext();
  const [selectedValue, setSelectedValue] = useState(
    schema.validate.defaultValue
  );

  useEffect(() => {
    updateFormData(schema.jsonKey, schema.validate.defaultValue);
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    updateFormData(schema.jsonKey, event.target.value);
  };

  return (
    <FormControl>
      <FormLabel htmlFor={schema.jsonKey}>{schema.label}</FormLabel>

      <Select
        id={schema.jsonKey}
        value={selectedValue}
        onChange={handleChange}
        disabled={schema.validate.immutable}
      >
        <option value="" disabled>
          {schema.placeholder}
        </option>
        {schema.validate.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
