import React from "react";
import { Button, Grid } from "@mui/material";
import { InputText, InputTextArea } from "~/components/inputs";
import InputSelect from "~/components/inputs/InputSelect/InputSelect";
import { withFormik } from "formik";
import validationSchema from "./validation";
import LoadingButton from "@mui/lab/LoadingButton";

function PostForm({
  touched,
  errors,
  handleSubmit,
  isSubmitting,
  isValid,
  values,
  dirty,
  closeSideDrawer,
  handleChange,
  handleBlur,
  isLoading,
  dataUser,
  loadingUser,
  errorUser,
}) {
  return (
    <form data-testid="form" style={{ padding: 20 }} onSubmit={handleSubmit}>
      <h2>{values.id ? "Edit Post" : "Add New Post"}</h2>
      <Grid container direction="row">
        <Grid item marginRight={2}>
          <InputText
            inputProps={{
              "data-testid": "input-text-title",
            }}
            label="Title"
            name="title"
            plache
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
            isError={errors.title}
            helperText={errors.title}
          />
        </Grid>
        <Grid item>
          <InputSelect
            inputProps={{
              "data-testid": "input-select-user-id",
            }}
            label="User"
            name="userId"
            value={values.userId}
            data={dataUser}
            loading={loadingUser}
            error={errorUser}
            optionKey="name"
            isError={errors.userId}
            helperText={errors.userId}
            onChange={handleChange("userId")}
            onBlur={handleBlur("userId")}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2}>
        <InputTextArea
          inputProps={{
            "data-testid": "input-text-area-body",
          }}
          label="Body"
          width="100%"
          name="body"
          onChange={handleChange("body")}
          onBlur={handleBlur("body")}
          value={values.body}
          isError={errors.body}
          helperText={errors.body}
        />
      </Grid>
      <Grid container marginTop={2} direction="row">
        <Grid item marginRight={2}>
          {isLoading ? (
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          ) : (
            <Button
              variant="contained"
              disabled={!isValid || !dirty}
              type="submit"
              data-testid="button-save"
            >
              Save
            </Button>
          )}
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={closeSideDrawer}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default withFormik({
  enableReinitialize: true,
  validationSchema,
  mapPropsToValues: (props) => {
    const { post } = props;
    return {
      id: post?.id || "",
      title: post?.title || "",
      userId: post?.userId || "",
      body: post?.body || "",
    };
  },
  handleSubmit: (payload, { props, ...rest }) =>
    props.handleSubmit(payload, rest),
  displayName: "PostForm",
})(PostForm);
