import { forwardRef } from "react";
import { ROUTES } from "~/configs";
import { Routes, Route, Navigate } from "react-router-dom";
import { Posts, Users, Albums, Photos, Comments } from "~/pages";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App({ snackbar, snackbarActions: { openSnackbar } }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.USERS()} />} />
        <Route path={ROUTES.USERS()} element={<Users />} />
        <Route path={ROUTES.POSTS()} element={<Posts />} />
        <Route path={ROUTES.ALBUMS()} element={<Albums />} />
        <Route path={ROUTES.PHOTOS()} element={<Photos />} />
        <Route path={ROUTES.COMMENTS()} element={<Comments />} />
      </Routes>
      <Snackbar open={snackbar.get("isOpen")} autoHideDuration={3000}>
        <Alert
          severity={snackbar.get("variant")}
          sx={{ width: "100%" }}
          onClose={() => openSnackbar({ isOpen: false })}
        >
          {snackbar.get("message")}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
