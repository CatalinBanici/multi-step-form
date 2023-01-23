import React from "react";

export default function PersonalInfo() {
  return (
    <div>
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </label>
    </div>
  );
}
