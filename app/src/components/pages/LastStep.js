import React from "react";

export default function LastStep(props) {
  const { formik } = props;
  return (
    <div className="last-step-container">
      <div className="chosen-plan-container">
        <div className="chosen-plan">
          <h3>{formik.values.planOption}</h3>
          <button>Change</button>
        </div>
        <h3>${}/</h3>
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
