import React, { useState } from "react";
import PostForm from "./PostForm";
import useAxios from "axios-hooks";
import { INITIALIZERS } from "~/configs";

export default function PostFormContainer({
  sideDrawerActions: { closeSideDrawer },
  snackbarActions: { openSnackbar },
  refetch,
  post,
}) {
  const [{ loading }, _createPost] = useAxios(
    {
      url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/posts`,
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
    { manual: true }
  );

  const [{ loading: loadingEdit }, _updatePost] = useAxios(
    {
      url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/posts/${post.id}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
    { manual: true }
  );

  const handleSubmit = async (
    payload,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      let message;

      if (payload.id) {
        await _updatePost({
          data: JSON.stringify({ ...payload }),
        });
        message = `Yay, that Post successfully updated!`;
        refetch();
      } else {
        await _createPost({
          data: JSON.stringify({ ...payload }),
        });

        message = "Yay, new Post successfully added!";
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
    <PostForm
      closeSideDrawer={closeSideDrawer}
      handleSubmit={handleSubmit}
      isLoading={loading || loadingEdit}
      post={post}
    />
  );
}
