import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const Fetching = ({ isTable, styles = {} }) => (
  <Grid item component={isTable ? "caption" : "div"}>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: 104, ...styles }}
    >
      <Grid item style={{ marginBottom: 16 }}>
        <CircularProgress size={32} style={{ verticalAlign: "middle" }} />
      </Grid>
      <Grid item>
        <h4>Please wait, data fetching in progress…</h4>
      </Grid>
    </Grid>
  </Grid>
);

export default Fetching;
