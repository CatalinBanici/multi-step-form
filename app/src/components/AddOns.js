import React from "react";

export default function AddOns() {
  return (
    <>
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="online" />
        <div>
          <label for="online">Online service</label>
          <p>Access to multiplayer games</p>
        </div>
        <p>+1$/mo</p>
      </div>
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="larger" />
        <div>
          <label for="larger">Larger storage</label>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p>+2$/mo</p>
      </div>
      <div className="checkbox-input-container">
        <input type="checkbox" name="checkbox" id="custom" />
        <div>
          <label for="custom">Customizable profile</label>
          <p>Custom theme on your profile</p>
        </div>
        <p>+2$/mo</p>
      </div>
    </>
  );
}
