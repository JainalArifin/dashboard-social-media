import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { InputText, InputTextArea } from "~/components/inputs";
import InputSelect from "~/components/inputs/InputSelect/InputSelect";
import { INITIALIZERS } from "~/configs";
import useAxios from "axios-hooks";
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
}) {
  const [{ data, loading, error }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/posts`
  );

  return (
    <form style={{ padding: 20 }} onSubmit={handleSubmit}>
      <h2>{values.id ? "Edit Comment" : "Add New Comment"}</h2>
      <Grid container direction="row">
        <Grid item marginRight={2}>
          <InputText
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
          label="Post"
          name="postId"
          value={values.postId}
          data={data}
          loading={loading}
          error={error}
          optionKey="title"
          isError={errors.postId}
          helperText={errors.postId}
          onChange={handleChange("postId")}
          onBlur={handleBlur("postId")}
        />
      </Grid>
      <Grid container marginTop={2}>
        <InputTextArea
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
