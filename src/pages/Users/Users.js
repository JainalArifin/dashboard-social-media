import React from "react";
import { PageBase } from "@layouts";
import { UsersTable } from "@tables";

export default function Users() {
  return (
    <PageBase>
      <h2>List of Users</h2>
      <UsersTable />
    </PageBase>
  );
}
