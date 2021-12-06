import React from "react";
import "jest-styled-components";
import InputTextArea from "../InputTextArea";
import { render, fireEvent } from "@testing-library/react";

describe("unit testing input text", () => {
  it("change value input text area", () => {
    const { getByTestId } = render(
      <InputTextArea
        inputProps={{
          "data-testid": "input-text-area-body",
        }}
        name="title"
        label="Title"
        errorMessage={false}
        isError={false}
        width={300}
      />
    );

    const inputBody = getByTestId("input-text-area-body");
    fireEvent.change(inputBody, {
      target: { value: "bismillah body jalan" },
    });
    expect(inputBody.value).toBe("bismillah body jalan");
  });
});
