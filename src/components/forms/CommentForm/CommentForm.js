import React from "react";
import { Button, Grid } from "@mui/material";
import { InputText, InputTextArea } from "~/components/inputs";
import InputSelect from "~/components/inputs/InputSelect/InputSelect";
import { withFormik } from "formik";
import validationSchema from "./validation";
import LoadingButton from "@mui/lab/LoadingButton";

function CommentForm({
  touched,
  errors,
  handleSubmit,
  chapterNameOptions,
  isSubmitting,
  isValid,
  values,
  dirty,
  closeSideDrawer,
  handleChange,
  handleBlur,
  isLoading,
  dataPost,
  loadingPost,
  errorPost,
}) {
  return (
    <form style={{ padding: 20 }} onSubmit={handleSubmit}>
      <h2>{values.id ? "Edit Comment" : "Add New Comment"}</h2>
      <Grid container direction="row">
        <Grid item marginRight={2}>
          <InputText
            inputProps={{
              "data-testid": "input-text-name",
            }}
            label="Name"
            name="name"
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            isError={errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item marginRight={2}>
          <InputText
            inputProps={{
              "data-testid": "input-text-email",
            }}
            label="Email"
            name="email"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            isError={errors.email}
            helperText={errors.email}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2}>
        <InputSelect
          inputProps={{
            "data-testid": "input-select-post-id",
          }}
          label="Post"
          name="postId"
          value={values.postId}
          data={dataPost}
          loading={loadingPost}
          error={errorPost}
          optionKey="title"
          isError={errors.postId}
          helperText={errors.postId}
          onChange={handleChange("postId")}
          onBlur={handleBlur("postId")}
        />
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
    const { comment } = props;
    return {
      id: comment?.id || "",
      name: comment?.name || "",
      email: comment?.email || "",
      postId: comment?.postId || "",
      body: comment?.body || "",
    };
  },
  handleSubmit: (payload, { props, ...rest }) =>
    props.handleSubmit(payload, rest),
  displayName: "CommentForm",
})(CommentForm);
