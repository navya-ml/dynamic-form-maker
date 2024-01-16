import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './pt.css'
const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [formSchema, setFormSchema] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    try {
      const parsedFields = JSON.parse(e.target.value);
      if (Array.isArray(parsedFields)) {
        setFormSchema(parsedFields);
      }
    } catch (error) {
      toast.error("Invalid Form Schema", toastOptions);
    }
  };

  const handleReset = () => {
    setFormSchema([]);
    setInputValue("");
    // You can add your own logic for resetting data
    toast.success("Form Reset Successfully", toastOptions);
  };

  return (
    <>
      {/* Header - You can customize this part as needed */}
      <div style={{ backgroundColor: "#0F1035", color: "#fff",height:"50px"}}>
        <h1 style={{textAlign: "center" ,fontSize:"20px"}}>Form Generator</h1>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <textarea
          value={inputValue}
          placeholder="Paste UI schema here"
          className="centered-placeholder"
          onChange={handleInputChange}
          style={{
            height: "100vh",
            width: "50%",
            resize: "none",
            color: "#fff",
            backgroundColor: "black",
            fontSize: "20px",
            border: "none",
            
          }}
        />

        {formSchema.length > 0 && (
          <div style={{ width: "50%", height: "100vh", overflowY: "scroll" }}>
            <div
              style={{
                borderWidth: "1px",
                borderRadius: "lg",
                
                backgroundColor: "black",
                color: "#7077A1",
              }}
            >
              <DynamicForm formSchema={formSchema} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#007BFF",
                    color: "#333",
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleReset}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;

