import React from "react";
import { COLOR_PRIMARY } from "~/styles";
import Styled from "styled-components";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Divider = Styled.hr`
  background-color: ${COLOR_PRIMARY};
  height: 2px;
  width: 50px;
  border: none;
  margin-bottom: 16px;
`;

const ErrorTable = ({ isTable }) => {
  return (
    <Grid item component={isTable ? "caption" : "div"}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding: "0 190px" }}
      >
        <Grid item style={{ marginBottom: 24, marginTop: 70 }}>
          <Typography variant="h1">Error</Typography>
        </Grid>
        <Grid item style={{ marginBottom: 8 }}>
          <Typography variant="h3">Oops, something went wrong…</Typography>
        </Grid>
        <Divider />
        <Typography align="center" spacing="1px" height="24px">
          We’re terribly sorry, however something went wrong when trying to load
          this page.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorTable;
