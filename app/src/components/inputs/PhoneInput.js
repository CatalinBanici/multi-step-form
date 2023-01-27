import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../formik/TextError";

export default function PhoneInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="text-input-container">
      <div className="label-container">
        <label htmlFor={name}>{label}</label>
        <ErrorMessage name={name} component={TextError} />
      </div>
      <Field id={name} name={name} {...rest} />
    </div>
  );
}