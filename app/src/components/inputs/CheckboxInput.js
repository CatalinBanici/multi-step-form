import React from "react";
import { Field } from "formik";

export default function CheckboxInput(props) {
  const { options, togglePlan, name, ...rest } = props;
  return (
    <div className="checkbox-body">
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="checkbox-input-container" key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <div>
                  <label htmlFor={option.value}>{option.value}</label>
                  <p>{option.description}</p>
                </div>
                <span>
                  +${togglePlan === "monthly" ? option.priceMo : option.priceYr}
                  {togglePlan === "monthly" ? "/mo" : "/yr"}
                </span>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
}
