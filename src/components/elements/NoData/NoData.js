import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const NoData = ({ isTable }) => {
  return (
    <Grid item component={isTable ? "caption" : "div"}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ marginTop: 104 }}
      >
        <Grid item style={{ marginBottom: 16 }}>
          <Typography variant="h1">No Data</Typography>
        </Grid>
        <Grid item style={{ marginBottom: 8 }}>
          <Typography variant="h4">Sorry, data not available…</Typography>
        </Grid>
        <Grid item style={{ width: 357, textAlign: "center" }}>
          <Typography variant="h5">Data on this page is empty.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoData;
