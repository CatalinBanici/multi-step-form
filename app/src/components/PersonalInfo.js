import React from "react";
import FormikControl from "./FormikControl";

export default function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <FormikControl
        control="name"
        type="text"
        name="name"
        label="Name"
        placeholder="e.g. Stephen King"
      />
      <FormikControl
        control="email"
        type="email"
        name="email"
        label="Email Adress"
        placeholder="e.g. stephenking@lorem.com"
      />

      <FormikControl
        control="phone"
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  );
}
