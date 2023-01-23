import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
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

  function pageDisplay() {
    if (formStep === 0) {
      return <PersonalInfo />;
    } else if (formStep === 1) {
      return <Plan />;
    } else if (formStep === 2) {
      return <AddOns />;
    } else {
      return <LastStep />;
    }
  }

  return (
    <main className="app-container">
      <Sidebar />
      <Form
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
