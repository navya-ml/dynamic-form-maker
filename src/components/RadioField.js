import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useFormContext } from "../FormContext";

const FormControl = styled.div`
  margin-top: 5px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const Button = styled.button`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? "#2196F3" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Tooltip = styled.span`
  margin-left: 6px;
  background-color: #a6a6e6;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 25px;
`;

const RadioField = ({ schema }) => {
  const { updateFormData } = useFormContext();
  useEffect(() => {
    updateFormData(schema.jsonKey, schema.validate.defaultValue);
  }, []);

  const [selectedTab, setSelectedTab] = useState(
    schema.validate.defaultValue
  );

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
    updateFormData(schema.jsonKey, tabValue);
  };

  return (
    <FormControl>
      <FormLabel>
        {schema.label}
        {schema.description && (
          <Tooltip>{schema.description}</Tooltip>
        )}
      </FormLabel>

      <ButtonGroup>
        {schema.validate.options.map((option) => (
          <Button
            key={option.value}
            id={option.value}
            onClick={() => handleTabChange(option.value)}
            isSelected={selectedTab === option.value}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </FormControl>
  );
};

export default RadioField;

