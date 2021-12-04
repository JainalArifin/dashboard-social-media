import React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Fetching, ErrorTable, NoData } from "@elements";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UsersTable({ isLoading, isError, users }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>Website</StyledTableCell>
          </TableRow>
        </TableHead>
        {(() => {
          if (isLoading) {
            return <Fetching isTable />;
          }

          if (isError) {
            return <ErrorTable isTable />;
          }

          if (users) {
            if (users.isEmpty()) {
              return <NoData isTable />;
            }
            return (
              <TableBody>
                {users.map((user, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{user.get("name")}</StyledTableCell>
                    <StyledTableCell>{user.get("username")}</StyledTableCell>
                    <StyledTableCell>{user.get("email")}</StyledTableCell>
                    <StyledTableCell>
                      {user.getIn(["address", "city"])}
                    </StyledTableCell>
                    <StyledTableCell>{user.get("phone")}</StyledTableCell>
                    <StyledTableCell>
                      {user.getIn(["company", "name"])}
                    </StyledTableCell>
                    <StyledTableCell>{user.get("website")}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            );
          }

          return null;
        })()}
      </Table>
    </TableContainer>
  );
}
