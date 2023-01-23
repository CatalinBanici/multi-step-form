import React from "react";

export default function Form(props) {
  const { formStep, setFormStep, formTitles, formSubHeadings, pageDisplay } =
    props;

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>{formTitles[formStep]}</h1>
        <p>{formSubHeadings[formStep]}</p>
      </div>
      <div className="form">{pageDisplay()}</div>
      <div className="form-buttons">
        <button
          disabled={formStep === 0}
          onClick={() => {
            setFormStep((currentPage) => currentPage - 1);
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            setFormStep((currentPage) => currentPage + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
