import React from "react";


import "./form.scss";

export default function Form({ title, columnSize, inputElements }) {
 
 
    return (
    <div>
      <div className="container">
        <div className="formContainer">
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="center">
            <form style={{ gridTemplateColumns: `repeat(${columnSize}, 1fr)` }}>
              {inputElements.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
            </form>
          </div>
          {/* <div className="bottom"> */}
             <button>Send</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
