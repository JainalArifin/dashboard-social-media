import { useState, useEffect } from "react";
import { PageBase } from "@layouts";
import { PostsFilter } from "@filters";
import { Button, Grid, Drawer } from "@mui/material";
import { INITIALIZERS } from "~/configs";
import useAxios from "axios-hooks";
import { PostForm } from "@forms";
import { AlbumsTable } from "@tables";

export default function Albums({
  actions: { getPostDetail },
  sideDrawerActions: { openSideDrawer, closeSideDrawer },
  sideDrawerData,
}) {
  const [name, setName] = useState("");

  const [{ data: queryData, loading, error }, refetch] = useAxios({
    url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/albums`,
    params: { userId: name === "" ? null : name },
  });

  const handleChangeLabel = (event) => {
    setName(event.target.value);
    refetch();
  };

  function handleOpenFormClick() {
    getPostDetail({});
    openSideDrawer("PostForm");
  }

  return (
    <PageBase>
      <h2>List of Albums</h2>
      <Grid container direction="column">
        <Grid item style={{ marginBottom: 10 }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <PostsFilter
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
          <AlbumsTable
            loading={loading}
            error={error}
            queryData={queryData}
            refetch={refetch}
          />
        </Grid>
      </Grid>
      <Drawer
        open={sideDrawerData.get("isOpen")}
        onClose={closeSideDrawer}
        anchor="right"
        style={{
          padding: 20,
        }}
      >
        {sideDrawerData.get("componentName") === "PostForm" && (
          <PostForm refetch={refetch} />
        )}
      </Drawer>
    </PageBase>
  );
}
