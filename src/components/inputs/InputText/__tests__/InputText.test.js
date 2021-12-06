import React from "react";
import "jest-styled-components";
import InputText from "../InputText";
import { render, fireEvent } from "@testing-library/react";

describe("unit testing input text", () => {
  it("change value input text", () => {
    const { getByTestId } = render(
      <InputText
        inputProps={{
          "data-testid": "input-text-title",
        }}
        name="title"
        label="Title"
        errorMessage={false}
        isError={false}
        width={300}
      />
    );

    const inputTitle = getByTestId("input-text-title");
    fireEvent.change(inputTitle, {
      target: { value: "bismillah title jalan" },
    });
    expect(inputTitle.value).toBe("bismillah title jalan");
  });
});
