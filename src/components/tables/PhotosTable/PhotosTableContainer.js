import PhotosTable from "./PhotosTable";

export default function PhotosTableContainer({
  sideDrawerActions: { openSideDrawer },
  queryData,
  loading,
  error,
}) {
  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const photos = responseData;

  return (
    <>
      <PhotosTable
        openSideDrawer={openSideDrawer}
        isLoading={loading}
        isError={error}
        photos={photos}
      />
    </>
  );
}
