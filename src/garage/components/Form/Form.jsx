import React, { useState } from "react";

import "./form.scss";

export default function Form({
  title,
  columnSize,
  inputElements,
  onSubmitMethods,
}) {
  const [inputFields, setFields] = useState(inputElements);

  const updateObjectByname = (name, newValue) => {
    setFields((prevData) => {
      const updatedFields = prevData.map((item) => {
        if (item.name === name) {
          return { ...item, value: newValue };
        } else {
          return item;
        }
      });

      return updatedFields;
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(inputFields);
    onSubmitMethods(inputFields);
  };

  return (
    <div>
      <div className="container">
        <div className="formContainer">
          <div className="top">
            <h1>{title}</h1>
            {/* <h3>{inputFields[1].value}</h3> */}
          </div>
          <div className="center">
            <form
              onSubmit={handleOnSubmit}
              
            >
              <div className="formInputContainer" style={{ gridTemplateColumns: `repeat(${columnSize}, 1fr)` }}>
                {inputFields.map((input) => {
                  return (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        onChange={(e) => {
                          updateObjectByname(input.name, e.target.value);
                        }}
                        type={input.type}
                      />
                    </div>
                  );
                })}
              </div>

              {/* <div className="button"> */}
                <button type="submit">Send</button>
              {/* </div> */}
            </form>
          </div>
      
        </div>
      </div>
    </div>
  );
}
