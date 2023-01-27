import FormikContainer from "./components/FormikContainer";
import Progress from "./components/Progress";
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import LastStep from "./components/LastStep";

function App() {
  const [formStep, setFormStep] = useState(0);

  const formTitles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const formSubHeadings = [
    "Please provide your name, email adress and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  const planOptionsMo = [
    { key: "Arcade", value: "Arcade-Plan-Month", price: 9 },
    { key: "Advanced", value: "Advanced-Plan-Month", price: 12 },
    { key: "Pro", value: "Pro-Plan-Month", price: 15 },
  ];

  const planOptionsYr = [
    { key: "Arcade", value: "Arcade-Plan-Year", price: 90 },
    { key: "Advanced", value: "Advanced-Plan-Year", price: 120 },
    { key: "Pro", value: "Pro-Plan-Year", price: 150 },
  ];

  function pageDisplay() {
    if (formStep === 0) {
      return <PersonalInfo />;
    } else if (formStep === 1) {
      return (
        <Plan planOptionsMo={planOptionsMo} planOptionsYr={planOptionsYr} />
      );
    } else if (formStep === 2) {
      return <AddOns />;
    } else {
      return <LastStep />;
    }
  }

  return (
    <main className="app-container">
      <Progress />
      <FormikContainer
        formStep={formStep}
        setFormStep={setFormStep}
        formTitles={formTitles}
        formSubHeadings={formSubHeadings}
        pageDisplay={pageDisplay}
      />
    </main>
  );
}

export default App;
