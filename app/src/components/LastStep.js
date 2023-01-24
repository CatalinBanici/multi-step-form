import React from "react";

export default function LastStep() {
  return (
    <div className="last-step-container">
      <div className="chosen-plan-container">
        <div className="chosen-plan">
          <h3>Arcade</h3>
          <button>Change</button>
        </div>
        <h3>9$/mo</h3>
      </div>

      <hr />

      <div className="chosen-addons-container">
        <div className="chosen-addon">
          <p>Online service</p>
          <h4>+1$/mo</h4>
        </div>
        <div className="chosen-addon">
          <p>Larget storage</p>
          <h4>+2$/mo</h4>
        </div>
      </div>
    </div>
  );
}
