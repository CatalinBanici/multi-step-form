import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function RadioInput(props) {
  const { name, options, ...rest } = props;
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
                  <label htmlFor={option.value}>{option.key}</label>
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
