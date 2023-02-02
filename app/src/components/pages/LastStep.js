import React from "react";

export default function LastStep(props) {
  const { formik, togglePlan } = props;

  function displayPlanPrice(value) {
    if (value === "Arcade (Monthly)") {
      return 9;
    } else if (value === "Advanced (Monthly)") {
      return 12;
    } else if (value === "Pro (Monthly)") {
      return 15;
    } else if (value === "Arcade (Yearly)") {
      return 90;
    } else if (value === "Advanced (Yearly)") {
      return 120;
    } else if (value === "Pro (Yearly)") {
      return 150;
    } else {
      return null;
    }
  }

  // function displayAddOnPrice(value, total) {
  //   if (value === "Online Service") {
  //     return togglePlan === "monthly" ? 1 : 10;
  //   } else if (value === "Larger Storage") {
  //     return togglePlan === "monthly" ? 2 : 20;
  //   } else if (value === "Customizable Profile") {
  //     return togglePlan === "monthly" ? 2 : 20;
  //   } else {
  //     return null;
  //   }

  // }

  let addons = [
    ...formik.values.addOnOptions.map((addon) => {
      if (addon === "Online Service")
        return {
          name: "Online service",
          price: togglePlan === "monthly" ? 1 : 10,
        };
      if (addon === "Larger Storage")
        return {
          name: "Larger storage",
          price: togglePlan === "monthly" ? 2 : 20,
        };
      if (addon === "Customizable Profile")
        return {
          name: "Customizable profile",
          price: togglePlan === "monthly" ? 2 : 20,
        };
    }),
  ];

  console.log(addons);

  return (
    <div className="last-step-container">
      <div className="chosen-plan-addon-body">
        <div className="chosen-plan-container">
          <div className="chosen-plan">
            <h3>{formik.values.planOption}</h3>
            <button>Change</button>
          </div>
          <h3>
            ${displayPlanPrice(formik.values.planOption)}
            {togglePlan === "monthly" ? "/mo" : "/yr"}
          </h3>
        </div>

        <hr />

        <div className="chosen-addons-container">
          {addons.map((addon, i) => {
            return (
              <div key={i} className="chosen-addon">
                <p>{addon.name}</p>
                <h4>
                  +${addon.price}
                  {togglePlan === "monthly" ? "/mo" : "/yr"}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-container">
        <p></p>
        <h2>{}</h2>
      </div>
    </div>
  );
}
