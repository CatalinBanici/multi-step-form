import React from "react";
import FormikControl from "../formik/FormikControl";

export default function AddOns(props) {
  const { addOnOptions, togglePlan } = props;
  return (
    <div className="addons-container">
      <FormikControl
        control="checkbox"
        name="addOnOptions"
        options={addOnOptions}
        togglePlan={togglePlan}
      />
    </div>
  );
}
