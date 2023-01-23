import React from "react";

export default function PersonalInfo() {
  return (
    <>
      <div className="text-input-container">
        <div className="label-container">
          <label for="name">Name</label>
          <p>This field is required</p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          required
        />
      </div>
      <div className="text-input-container">
        <div className="label-container">
          <label for="email">Email</label>
          <p>This field is required</p>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          required
        />
      </div>
      <div className="text-input-container">
        <div className="label-container">
          <label for="phone">Phone Number</label>
          <p>This field is required</p>
        </div>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          required
        />
      </div>
    </>
  );
}
