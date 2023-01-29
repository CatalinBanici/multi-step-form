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
        {formik.values.addOnOptions.map((option) => {
          return (
            <div key={option} className="chosen-addon">
              <p>{option}</p>
              <h4>{}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
