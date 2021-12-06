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

export default function PostsFilter({ label, setLabel, handleChangeLabel }) {
  const [{ data: queryData, loading, error }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/posts`
  );

  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const posts = fromJS(responseData);

  return (
    <Grid container direction="row">
      <Grid item marginRight={2}>
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="label-filter-by-posts">Filter By Posts</InputLabel>
            <Select
              labelId="filter-by-posts"
              id="filter-by-posts"
              value={label}
              label="Filter By posts"
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

                if (posts) {
                  if (posts.isEmpty()) {
                    return <MenuItem>no data</MenuItem>;
                  }
                  return posts.map((post, index) => (
                    <MenuItem value={post.get("id")} key={index}>
                      {post.get("title").length >= 30
                        ? `${post.get("title").substring(0, 30)} ...`
                        : post.get("title")}
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
