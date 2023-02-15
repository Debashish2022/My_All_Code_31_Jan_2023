import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Payin.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TablePagination,
  TextField,
} from "@mui/material";

export default function Payin() {
  return (
    <>
      <TableContainer component={Paper} id="payin5">
        <Grid container spacing={2} id="payin6">
          <Grid item md={2} lg={2}>
            <TextField id="filled-basic" label="Order Id" variant="standard" />
          </Grid>
          <Grid item md={2} lg={2}>
            <TextField id="filled-basic" label="Amount" variant="standard" />
          </Grid>
          <Grid item md={2} lg={2}>
            <FormControl variant="standard" sx={{ minWidth: 150 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value=""
                onChange=""
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={30}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} lg={2}>
            <TextField
              id="filled-basic"
              label="Created Date"
              variant="standard"
            />
          </Grid>
        </Grid>
        <div id="payin10">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left" id="payin4">
                Order Id
              </TableCell>
              <TableCell align="left" id="payin4">
                Channel
              </TableCell>
              <TableCell align="left" id="payin4">
                Card
              </TableCell>
              <TableCell align="left" id="payin4">
                Amount{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Status{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Reference Id{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Create Time{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <AddCircleIcon id="payin1" />
              </TableCell>
              <TableCell align="left">16746288120192144804</TableCell>
              <TableCell align="left">UPI</TableCell>
              <TableCell align="left">netranandasahu47@axl</TableCell>
              <TableCell align="left">5000.00</TableCell>
              <TableCell align="left" id="payin2">
                APPROVED
              </TableCell>
              <TableCell align="left">302520801095</TableCell>
              <TableCell align="left">2023-01-25 12:10:12</TableCell>
              <TableCell align="left">
                <Button variant="contained" id="payin3">
                  APPROVAL
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count="10"
          rowsPerPage="10"
          page="10"
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
