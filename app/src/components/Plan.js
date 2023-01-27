import React, { useState } from "react";
import FormikControl from "./FormikControl";

export default function Plan(props) {
  const [togglePlan, setTogglePlan] = useState("monthly");

  const { planOptionsMo, planOptionsYr } = props;
  return (
    <div className="plan-container">
      <FormikControl
        togglePlan={togglePlan}
        control="radio"
        name="planOption"
        options={togglePlan === "yearly" ? planOptionsYr : planOptionsMo}
      />
      <div className="toggle-container">
        <button type="buton" onClick={() => setTogglePlan("monthly")}>
          Monthly
        </button>

        <label className="switch">
          <input
            readOnly
            checked={togglePlan === "yearly" ? true : false}
            type="checkbox"
            onClick={
              togglePlan === "monthly"
                ? () => setTogglePlan("yearly")
                : () => setTogglePlan("monthly")
            }
          />
          <span className="slider round"></span>
        </label>

        <button type="button" onClick={() => setTogglePlan("yearly")}>
          Yearly
        </button>
      </div>
    </div>
  );
}
