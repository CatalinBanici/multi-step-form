import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function FormikContainer(props) {
  const { formStep, setFormStep, formTitles, formSubHeadings, pageDisplay } =
    props;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    planOption: "",
  };

  const planOptions = [
    { key: "Arcade", value: "Arcade-Plan" },
    { key: "Advanced", value: "Advanced-Plan" },
    { key: "Pro", value: "Pro-Plan" },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("This field is required"),
    phone: Yup.number()
      .typeError("Must be a number")
      .required("This field is required"),
    planOption: Yup.string().required("You must pick an option"),
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
          <Form className="form-body">
            {pageDisplay()}
            <div className="form-buttons">
              <button
                type="button"
                disabled={formStep === 0}
                onClick={() => {
                  setFormStep((currentPage) => currentPage - 1);
                }}
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormStep((currentPage) => currentPage + 1);
                }}
              >
                {formStep === 3 ? "Confirm" : "Next Step"}
              </button>
            </div>
            <button
              type="submit"
              onClick={() => {
                onSubmit();
              }}
            >
              test
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
