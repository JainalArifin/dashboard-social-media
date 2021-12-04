import React from "react";
import UserTable from "./UsersTable";
import useAxios from "axios-hooks";
import { INITIALIZERS } from "~/configs";
import { fromJS } from "immutable";

export default function UsersTableContainer() {
  const [{ data: queryData, loading, error }] = useAxios(
    `${INITIALIZERS.API_JSON_PLACEHOLDER}/users`
  );

  let responseData = [];

  if (queryData) {
    responseData = queryData;
  }

  const users = fromJS(responseData);

  return (
    <div>
      <UserTable isLoading={loading} isError={error} users={users} />
    </div>
  );
}
