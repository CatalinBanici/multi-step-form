import React from "react";

export default function FormikControl(props) {
  const { control } = props;
  switch (control) {
    case "name":
    case "email":
    case "phone":
    case "radio":
    case "checkbox":
    default:
      return null;
  }
}
