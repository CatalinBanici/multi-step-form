import React from "react";
import NameInput from "./NameInput";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "name":
      return <NameInput {...rest} />;
    case "email":
    case "phone":
    case "radio":
    case "checkbox":
    default:
      return null;
  }
}
