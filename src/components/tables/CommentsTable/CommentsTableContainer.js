import { useState } from "react";
import CommentsTable from "./CommentsTable";
import { Box, Typography, Modal, Grid, Button } from "@mui/material";
import useAxios from "axios-hooks";
import { INITIALIZERS } from "~/configs";
import LoadingButton from "@mui/lab/LoadingButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CommentsTableContainer({
  actions: { getCommentDetail },
  sideDrawerActions: { openSideDrawer },
  snackbarActions: { openSnackbar },
  queryData,
  loading,
  error,
  comment,
  refetch,
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const [{ loading: loadingDelete }, _deletePost] = useAxios(
    {
      url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/comments/${comment.id}`,
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
    { manual: true }
  );

  const handleOpenModal = (comment) => {
    getCommentDetail(comment);
    setTitle(comment.body);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await _deletePost();
      openSnackbar({
        isOpen: true,
        variant: "success",
        message: `You have successfully deleted one of the Comment!`,
      });

      refetch();
      setOpen(false);
    } catch (e) {
      openSnackbar({
        isOpen: true,
        variant: "error",
        message: `Something went wrong. Let’s move and try again!`,
      });
    }
  };

  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const comments = responseData;

  return (
    <>
      <CommentsTable
        getCommentDetail={getCommentDetail}
        openSideDrawer={openSideDrawer}
        isLoading={loading}
        isError={error}
        comments={comments}
        handleOpenModal={handleOpenModal}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Confirmation.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure delete comment <b>{title}</b> ?
          </Typography>
          <Grid container direction="row" marginTop={2}>
            <Grid item marginRight={2}>
              {loadingDelete ? (
                <LoadingButton loading variant="outlined">
                  Delete
                </LoadingButton>
              ) : (
                <Button variant="contained" onClick={handleDelete}>
                  Delete
                </Button>
              )}
            </Grid>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
