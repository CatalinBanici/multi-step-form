import React from "react";

export default function LastStep(props) {
  const { formik, togglePlan } = props;

  function displayPlanPrice(value) {
    if (value === "Arcade (Monthly)") {
      return 9;
    } else if (value === "Advanced (Monthly)") {
      return 12;
    } else if (value === "Pro (Monthly)") {
      return 15;
    } else if (value === "Arcade (Yearly)") {
      return 90;
    } else if (value === "Advanced (Yearly)") {
      return 120;
    } else if (value === "Pro (Yearly)") {
      return 150;
    } else {
      return null;
    }
  }

  function displayAddOnPrice(value) {
    if (value === "Online Service") {
      return togglePlan === "monthly" ? 1 : 10;
    } else if (value === "Larger Storage") {
      return togglePlan === "monthly" ? 2 : 20;
    } else if (value === "Customizable Profile") {
      return togglePlan === "monthly" ? 2 : 20;
    } else {
      return null;
    }
  }

  return (
    <div className="last-step-container">
      <div className="chosen-plan-addon-body">
        <div className="chosen-plan-container">
          <div className="chosen-plan">
            <h3>{formik.values.planOption}</h3>
            <button>Change</button>
          </div>
          <h3>
            ${displayPlanPrice(formik.values.planOption)}
            {togglePlan === "monthly" ? "/mo" : "/yr"}
          </h3>
        </div>

        <hr />

        <div className="chosen-addons-container">
          {formik.values.addOnOptions.map((value) => {
            return (
              <div key={value} className="chosen-addon">
                <p>{value}</p>
                <h4>
                  +${displayAddOnPrice(value)}
                  {togglePlan === "monthly" ? "/mo" : "/yr"}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-container">
        {/* <p></p>
        <h2></h2> */}
      </div>
    </div>
  );
}
