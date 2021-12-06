import PhotosTable from "./PhotosTable";

export default function PhotosTableContainer({
  actions: { getPhotoDetail },
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
        getPhotoDetail={getPhotoDetail}
        openSideDrawer={openSideDrawer}
        isLoading={loading}
        isError={error}
        photos={photos}
      />
    </>
  );
}
