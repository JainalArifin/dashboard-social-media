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

export default function UsersFilter({ label, setLabel, handleChangeLabel }) {
  const [{ data: queryData, loading, error }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/users`
  );

  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const users = fromJS(responseData);

  return (
    <Grid container direction="row">
      <Grid item marginRight={2}>
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="label-filter-by-users">Filter By Users</InputLabel>
            <Select
              labelId="filter-by-users"
              id="filter-by-users"
              value={label}
              label="Filter By Users"
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

                if (users) {
                  if (users.isEmpty()) {
                    return <MenuItem>no data</MenuItem>;
                  }
                  return users.map((user, index) => (
                    <MenuItem value={user.get("id")} key={index}>
                      {user.get("name")}
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
