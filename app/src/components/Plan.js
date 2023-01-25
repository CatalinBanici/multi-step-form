import React from "react";

export default function Plan() {
  return (
    <div className="plan-container">
      <div className="toggle-container">
        <button>monthly</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button>yearly</button>
      </div>
    </div>
  );
}
