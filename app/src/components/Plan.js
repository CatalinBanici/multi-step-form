import React from "react";
import FormikControl from "./FormikControl";

export default function Plan(props) {
  const { planOptions } = props;
  return (
    <div className="plan-container">
      <FormikControl control="radio" name="planOption" options={planOptions} />
      <div className="toggle-container">
        <button>monthly</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button>yearly</button>
      </div>
    </div>
  );
}
