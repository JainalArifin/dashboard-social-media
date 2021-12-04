import * as React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ routes }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {routes.map(({ breadcrumb, path }, index) => {
          if (index < routes.length - 1) {
            return (
              <Link underline="hover" color="inherit" to={path}>
                {breadcrumb}
              </Link>
            );
          }
          return <Typography color="text.primary">{breadcrumb}</Typography>;
        })}
      </Breadcrumbs>
    </div>
  );
}
