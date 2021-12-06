import AlbumsTable from "./AlbumsTable";

export default function AlbumsTableContainer({
  sideDrawerActions: { openSideDrawer },
  queryData,
  loading,
  error,
}) {
  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const albums = responseData;

  return (
    <>
      <AlbumsTable
        openSideDrawer={openSideDrawer}
        isLoading={loading}
        isError={error}
        albums={albums}
      />
    </>
  );
}
