import { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
} from "@mui/material";
import useAxios from "axios-hooks";
import { INITIALIZERS } from "~/configs";
import { fromJS } from "immutable";

export default function AlbumsFilter({ label, setLabel, handleChangeLabel }) {
  const [{ data: queryData, loading, error }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/albums`
  );

  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const albums = fromJS(responseData);

  return (
    <Grid container direction="row">
      <Grid item marginRight={2}>
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="label-filter-by-albums">
              Filter By Albums
            </InputLabel>
            <Select
              labelId="filter-by-albums"
              id="filter-by-albums"
              value={label}
              label="Filter By albums"
              // onChange={handleChange}
              onChange={handleChangeLabel}
            >
              {(() => {
                if (loading) {
                  return <MenuItem>loading...</MenuItem>;
                }

                if (error) {
                  return <MenuItem>error</MenuItem>;
                }

                if (albums) {
                  if (albums.isEmpty()) {
                    return <MenuItem>no data</MenuItem>;
                  }
                  return albums.map((user, index) => (
                    <MenuItem value={user.get("id")} key={index}>
                      {user.get("title").length >= 30
                        ? `${user.get("title").substring(0, 30)} ...`
                        : user.get("title")}
                    </MenuItem>
                  ));
                }

                return null;
              })()}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          disabled={label === ""}
          onClick={() => setLabel("")}
        >
          reset
        </Button>
      </Grid>
    </Grid>
  );
}
