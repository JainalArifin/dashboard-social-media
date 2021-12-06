import { useState, useEffect } from "react";
import { PageBase } from "@layouts";
import { UsersFilter } from "@filters";
import { Grid } from "@mui/material";
import { INITIALIZERS } from "~/configs";
import useAxios from "axios-hooks";
import { AlbumsTable } from "@tables";

export default function Albums() {
  const [name, setName] = useState("");

  const [{ data: queryData, loading, error }, refetch] = useAxios({
    url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/albums`,
    params: { userId: name === "" ? null : name },
  });

  const handleChangeLabel = (event) => {
    setName(event.target.value, () => {
      refetch();
    });
  };

  return (
    <PageBase>
      <h2>List of Albums</h2>
      <Grid container direction="column">
        <Grid item style={{ marginBottom: 10 }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <UsersFilter
                label={name}
                handleChangeLabel={handleChangeLabel}
                setLabel={setName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <AlbumsTable
            loading={loading}
            error={error}
            queryData={queryData}
            refetch={refetch}
          />
        </Grid>
      </Grid>
    </PageBase>
  );
}
