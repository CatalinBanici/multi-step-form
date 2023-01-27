import React from "react";
import EmailInput from "../inputs/EmailInput";
import NameInput from "../inputs/NameInput";
import PhoneInput from "../inputs/PhoneInput";
import RadioInput from "../inputs/RadioInput";

export default function FormikControl(props) {
  const { togglePlan, control, ...rest } = props;
  switch (control) {
    case "name":
      return <NameInput {...rest} />;
    case "email":
      return <EmailInput {...rest} />;
    case "phone":
      return <PhoneInput {...rest} />;
    case "radio":
      return <RadioInput togglePlan={togglePlan} {...rest} />;
    case "checkbox":
    default:
      return null;
  }
}
