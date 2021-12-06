import renderer from "react-test-renderer";
import {
  render as rtlRender,
  fireEvent,
  within,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import CommentForm from "@forms/CommentForm/CommentForm";
import { Provider } from "react-redux";
// import { history } from "~/redux/configureStore";
import configureStore, { history } from "~/redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Formik } from "formik";
import validation from "../validation";
import "@testing-library/jest-dom";
import "jest-styled-components";
import UserEvent from "@testing-library/user-event";

const handleSubmit = jest.fn();
const closeSideDrawer = jest.fn();

const initValue = {
  id: "",
  name: "",
  email: "",
  postId: "",
  body: "",
};

const dataPost = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  },
  {
    id: 2,
    title: "qui est esse",
  },
];

const selectMaterialUiSelectOption = async (element, optionText) =>
  new Promise((resolve) => {
    // The the button that opens the dropdown, which is a sibling of the input
    const selectButton = element.parentNode.querySelector("[role=button]");

    // Open the select dropdown
    UserEvent.click(selectButton);

    // Get the dropdown element. We don't use getByRole() because it includes <select>s too.
    const listbox = document.body.querySelector("ul[role=listbox]");

    // Click the list item
    const listItem = within(listbox).getByText(optionText);
    UserEvent.click(listItem);

    // Wait for the listbox to be removed, so it isn't visible in subsequent calls
    waitForElementToBeRemoved(() =>
      document.body.querySelector("ul[role=listbox]")
    ).then(resolve);
  });

const store = configureStore();
function render(ui, history, options) {
  return rtlRender(
    <Provider store={store}>
      <Router history={history}>{ui}</Router>
    </Provider>,
    options
  );
}

const componentElement = (
  <Formik
    onSubmit={handleSubmit}
    initialValues={initValue}
    validationSchema={validation}
  >
    {(props) => (
      <CommentForm
        dataPost={dataPost}
        loadingPost={false}
        errorPost={false}
        closeSideDrawer={closeSideDrawer}
        isLoading={false}
        comment={initValue}
        {...props}
      />
    )}
  </Formik>
);

describe("Integration test Comment Form Component", () => {
  it("can input and submit form comment", async () => {
    const { getByTestId } = render(componentElement, history);

    // Button save
    const buttonSave = await getByTestId("button-save");
    // Cek button disable
    expect(buttonSave).toBeDisabled();

    // input name
    const inputName = await getByTestId("input-text-name");
    fireEvent.change(inputName, {
      target: { value: "bismillah name jalan" },
    });
    expect(inputName.value).toBe("bismillah name jalan");

    // input name
    const inputEmail = await getByTestId("input-text-email");
    fireEvent.change(inputEmail, {
      target: { value: "bismillah email jalan" },
    });
    expect(inputEmail.value).toBe("bismillah email jalan");

    // input select user
    const inputPostId = await getByTestId("input-select-post-id");
    selectMaterialUiSelectOption(inputPostId, "qui est esse");
    expect(inputPostId.value).toBe("2");

    // input body
    const inputBody = await getByTestId("input-text-area-body");
    fireEvent.change(inputBody, { target: { value: "bismillah body jalan" } });
    expect(inputBody.value).toBe("bismillah body jalan");

    // cek button enable
    expect(buttonSave).toBeEnabled();

    // click button submit
    await fireEvent.click(buttonSave);
  });
});
