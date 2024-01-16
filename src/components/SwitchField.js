import React, { useEffect, useState } from "react";

const SwitchField = ({ schema }) => {
  const [isChecked, setIsChecked] = useState(schema.validate.defaultValue);

  useEffect(() => {
    setIsChecked(schema.validate.defaultValue);
  }, []);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    // You can add your logic here for handling the state change
  };

  return (
    <div style={{ marginTop: "5px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          id={schema.jsonKey}
          checked={isChecked}
          onChange={handleChange}
          disabled={schema.validate.immutable}
          style={{ marginRight: "8px" }}
        />
        <label htmlFor={schema.jsonKey}>
          {schema.label}
          {schema.description.length > 0 && (
            <span
              style={{
                marginLeft: "6px",
                backgroundColor: "#a6a6e6",
                fontSize: "12px",
                padding: "2px 8px",
                borderRadius: "25px",
              }}
            >
              i
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default SwitchField;

