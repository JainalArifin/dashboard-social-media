import { useState } from "react";
import { PageBase } from "@layouts";
import { CommentsTable } from "@tables";
import { PostsFilter } from "@filters";
import { Button, Grid, Drawer } from "@mui/material";
import { INITIALIZERS } from "~/configs";
import useAxios from "axios-hooks";
import { CommentForm } from "@forms";

export default function Comments({
  actions: { getCommentDetail },
  sideDrawerActions: { openSideDrawer, closeSideDrawer },
  sideDrawerData,
}) {
  const [name, setName] = useState("");

  const [{ data: queryData, loading, error }, refetch] = useAxios({
    url: `${INITIALIZERS.API_JSON_PLACEHOLDER}/comments`,
    params: { postId: name === "" ? null : name },
  });

  const handleChangeLabel = (event) => {
    setName(event.target.value, () => {
      refetch();
    });
  };

  function handleOpenFormClick() {
    getCommentDetail({});
    openSideDrawer("CommentForm");
  }

  return (
    <PageBase>
      <h2>List of Comments</h2>
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
              <Button variant="contained" onClick={handleOpenFormClick}>
                Add Comment
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CommentsTable
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
        {sideDrawerData.get("componentName") === "CommentForm" && (
          <CommentForm refetch={refetch} />
        )}
      </Drawer>
    </PageBase>
  );
}
