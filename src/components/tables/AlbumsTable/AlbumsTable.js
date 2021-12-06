import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
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

export default function AlbumsTable({ isLoading, isError, albums }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  function createData(id, title) {
    return { id, title };
  }

  const rows = albums.map((item) => createData(item.id, item.title));

  const handleChangePage = (event, newPage) => {
    console.log({ event, newPage });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log({ event });
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
            </TableRow>
          </TableHead>
          {(() => {
            if (isLoading) {
              return <Fetching isTable />;
            }

            if (isError) {
              return <ErrorTable isTable />;
            }

            if (rows) {
              if (rows.length === 0) {
                return <NoData isTable />;
              }
              return (
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((album, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell>{album.title}</StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                </TableBody>
              );
            }

            return null;
          })()}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
