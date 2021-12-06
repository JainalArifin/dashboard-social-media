import React from "react";
import { Button, Grid, Typography } from "@mui/material";

export default function PhotoDetail({
  photo,
  sideDrawerActions: { closeSideDrawer },
}) {
  return (
    <Grid container direction="column" padding={5}>
      <Grid item>
        <Typography variant="h5">Detail Photo</Typography>
      </Grid>
      <Grid item marginTop={2}>
        <Typography variant="body1">{photo.title}</Typography>
      </Grid>
      <Grid item marginTop={2}>
        <img
          src={`${photo.thumbnailUrl}?w=100&h=100&fit=crop&auto=format`}
          srcSet={`${photo.thumbnailUrl}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
          alt={photo.title}
          loading="lazy"
        />
      </Grid>
      <Grid item marginTop={2}>
        <Button variant="outlined" onClick={closeSideDrawer}>
          Close
        </Button>
      </Grid>
    </Grid>
  );
}
