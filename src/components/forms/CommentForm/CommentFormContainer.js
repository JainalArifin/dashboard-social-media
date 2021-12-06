import React, { useState } from "react";
import CommentForm from "./CommentForm";
import useAxios from "axios-hooks";
import { INITIALIZERS } from "~/configs";

export default function CommentFormContainer({
  sideDrawerActions: { closeSideDrawer },
  snackbarActions: { openSnackbar },
  refetch,
  comment,
}) {
  const [{ loading }, _createComment] = useAxios(
    {
      url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/comments`,
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
    { manual: true }
  );

  const [{ loading: loadingEdit }, _updateComment] = useAxios(
    {
      url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/comments/${comment.id}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
    { manual: true }
  );

  const [{ data: dataPost, loading: loadingPost, error: errorPost }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/posts`
  );

  const handleSubmit = async (
    payload,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      let message;

      if (payload.id) {
        await _updateComment({
          data: JSON.stringify({ ...payload }),
        });
        message = `Yay, that Comment successfully updated!`;
        refetch();
      } else {
        await _createComment({
          data: JSON.stringify({ ...payload }),
        });

        message = "Yay, new Comment successfully added!";
        refetch();
      }
      openSnackbar({
        isOpen: true,
        variant: "success",
        message,
      });

      resetForm();
      closeSideDrawer();
    } catch (e) {
      openSnackbar({
        isOpen: true,
        variant: "error",
        message: "Something went wrong. Let’s move and try again!",
      });

      setSubmitting(false);
    }
  };

  return (
    <CommentForm
      closeSideDrawer={closeSideDrawer}
      handleSubmit={handleSubmit}
      isLoading={loading || loadingEdit}
      comment={comment}
      dataPost={dataPost}
      loadingPost={loadingPost}
      errorPost={errorPost}
    />
  );
}
