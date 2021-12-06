import { useState } from "react";
import { PageBase } from "@layouts";
import { AlbumsFilter } from "@filters";
import { Grid } from "@mui/material";
import { INITIALIZERS } from "~/configs";
import useAxios from "axios-hooks";
import { PhotosTable } from "@tables";

export default function Photos() {
  const [name, setName] = useState("");

  const [{ data: queryData, loading, error }, refetch] = useAxios({
    url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/photos`,
    params: { albumId: name === "" ? null : name },
  });

  const handleChangeLabel = async (event) => {
    await setName(event.target.value, () => {
      refetch();
    });
  };

  return (
    <PageBase>
      <h2>List of Photos</h2>
      <Grid container direction="column">
        <Grid item style={{ marginBottom: 10 }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <AlbumsFilter
                label={name}
                handleChangeLabel={handleChangeLabel}
                setLabel={setName}
              />
            </Grid>
            <Grid item>
              {/* <Button variant="contained" onClick={handleOpenFormClick}>
                Add Post
              </Button> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PhotosTable
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
