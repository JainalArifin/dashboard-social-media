import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import InputText from "../InputText";
import { Formik, Field } from "formik";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Formik>
        <Field name="fname" component={InputText} isError={false} />
      </Formik>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
