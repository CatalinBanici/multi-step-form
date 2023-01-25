import React from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PhoneInput from "./PhoneInput";
import RadioInput from "./RadioInput";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "name":
      return <NameInput {...rest} />;
    case "email":
      return <EmailInput {...rest} />;
    case "phone":
      return <PhoneInput {...rest} />;
    case "radio":
      return <RadioInput {...rest} />;
    case "checkbox":
    default:
      return null;
  }
}
