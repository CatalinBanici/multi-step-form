import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function RadioInput(props) {
  const { togglePlan, name, options, ...rest } = props;
  return (
    <div className="radio-body">
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="radio-input-container" key={option.key}>
                <input
                  type="radio"
                  id="option.value"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <div>
                  {option.icon}
                  <label htmlFor={option.value}>{option.key}</label>
                  <p>
                    ${option.price}
                    {togglePlan === "monthly" ? "/mo" : "/yr"}
                  </p>
                  <p>{togglePlan === "monthly" ? null : "2 months free"}</p>
                </div>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
