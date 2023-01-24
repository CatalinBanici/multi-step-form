import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function FormikContainer(props) {
  const { formStep, setFormStep, formTitles, formSubHeadings, pageDisplay } =
    props;

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
  });

  function onSubmit(values) {
    console.log("Submited: ", values);
  }

  console.log(initialValues);

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>{formTitles[formStep]}</h1>
        <p>{formSubHeadings[formStep]}</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            {pageDisplay()}
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
                {formStep === 3 ? "Confirm" : "Next Step"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
