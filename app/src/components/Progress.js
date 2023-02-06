import React from "react";

export default function Progress({ formStep }) {
  return (
    <div className="progress-container">
      <div className="step-container">
        <div className={formStep === 0 ? "step-number-active" : "step-number"}>
          1
        </div>
        <div className="step-text">
          <h3>step 1</h3>
          <h3>your info</h3>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 1 ? "step-number-active" : "step-number"}>
          2
        </div>
        <div className="step-text">
          <h3>step 2</h3>
          <h3>select plan</h3>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 2 ? "step-number-active" : "step-number"}>
          3
        </div>
        <div className="step-text">
          <h3>step 3</h3>
          <h3>add-ons</h3>
        </div>
      </div>
      <div className="step-container">
        <div className={formStep === 3 ? "step-number-active" : "step-number"}>
          4
        </div>
        <div className="step-text">
          <h3>step 4</h3>
          <h3>summary</h3>
        </div>
      </div>
    </div>
  );
}
