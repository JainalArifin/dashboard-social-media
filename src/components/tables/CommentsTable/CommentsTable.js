import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  Stack,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Fetching, ErrorTable, NoData } from "@elements";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColor from "@mui/icons-material/BorderColor";
// import Stack from "@mui/material/Stack";

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

export default function CommentsTable({
  getCommentDetail,
  openSideDrawer,
  isLoading,
  isError,
  comments,
  handleOpenModal,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  function createData(id, name, body, email, postId) {
    return { id, name, body, email, postId };
  }

  const rows = comments.map((item) =>
    createData(item.id, item.name, item.body, item.email, item.postId)
  );

  const handleChangePage = (event, newPage) => {
    console.log({ event, newPage });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log({ event });
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleOpenFormClick(comment) {
    getCommentDetail(comment);
    openSideDrawer("CommentForm");
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell>email</StyledTableCell>
              <StyledTableCell>Body</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
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
                    .map((comment, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell>{comment.name}</StyledTableCell>
                          <StyledTableCell>{comment.email}</StyledTableCell>
                          <StyledTableCell>{comment.body}</StyledTableCell>
                          <StyledTableCell>
                            <Stack direction="column" spacing={2}>
                              <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                color="error"
                                onClick={() => handleOpenModal(comment)}
                              >
                                Delete
                              </Button>
                              <Button
                                variant="outlined"
                                startIcon={<BorderColor />}
                                onClick={() => handleOpenFormClick(comment)}
                              >
                                Edit
                              </Button>
                            </Stack>
                          </StyledTableCell>
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
