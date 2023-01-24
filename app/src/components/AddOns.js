import React from "react";

export default function AddOns() {
  return (
    <div className="addons-container">
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="online" />
        <div>
          <label htmlFor="online">Online service</label>
          <p>Access to multiplayer games</p>
        </div>
        <p>+1$/mo</p>
      </div>
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="larger" />
        <div>
          <label htmlFor="larger">Larger storage</label>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p>+2$/mo</p>
      </div>
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="custom" />
        <div>
          <label htmlFor="custom">Customizable profile</label>
          <p>Custom theme on your profile</p>
        </div>
        <p>+2$/mo</p>
      </div>
    </div>
  );
}
