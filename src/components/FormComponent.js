import React, { useEffect, useState } from "react";
import styled from "styled-components";

import InputField from "./InputField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
// import { FormDataContext } from "../Pages/Home/DynamicForm";
import { useFormContext } from "../FormContext";

const FormContainer = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  ${(props) => (props.active ? "background-color: #3498db; color: #fff;" : "")}
`;

const FormComponent = ({ schema }) => {
  const { updateFormData } = useFormContext();

  useEffect(() => {
    updateFormData(schema.jsonKey, schema.subParameters[0].validate.defaultValue);
  }, []);

  const [selectedTab, setSelectedTab] = useState(
    schema.subParameters[0].validate.defaultValue
  );

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
    updateFormData(schema.jsonKey, tabValue);
  };

  const renderRadioButtons = (field) => {
    if (field.uiType === "Radio") {
      return (
        <div>
          <Label>{field.label}</Label>
          <ButtonGroup>
            {field.validate.options.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleTabChange(option.value)}
                active={selectedTab === option.value}
              >
                {option.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      );
    }
  };

  const renderSubParameters = (fields) => {
    return fields.map((schema) => {
      if (schema.uiType === "Ignore") {
        if (
          schema.conditions.some(
            (condition) =>
              condition.jsonKey === `pizza_type.type` &&
              condition.op === "==" &&
              condition.value === selectedTab &&
              condition.action === "enable"
          )
        ) {
          return renderSubParameters(schema.subParameters);
        }
      } else if (schema.uiType === "Select") {
        return <SelectField schema={schema} />;
      } else if (schema.uiType === "Input") {
        return <InputField schema={schema} />;
      } else if (schema.uiType === "Switch") {
        return <SwitchField schema={schema} />;
      }

      return null;
    });
  };

  return (
    <FormContainer>
      <Label>{schema.label}</Label>
      {schema.subParameters.map((field) => renderRadioButtons(field))}
      {renderSubParameters(schema.subParameters)}
    </FormContainer>
  );
};

export default FormComponent;
