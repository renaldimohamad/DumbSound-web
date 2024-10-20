import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Icon, Typography } from "@mui/material";

function createData(
  id: number,
  users: string,
  proofTransfer: string,
  remainingActive: string,
  userStatus: string,
  staatusPayment: string,
) {
  return {id, users, proofTransfer, remainingActive, userStatus, staatusPayment };
}

const rows = [
  createData(1,"Eclair", "BRI", "26/Hari", "active", "Aprove",),
  createData(2,"sandwich", "BRI","30/Hari", "active", "Aprove"),
  createData(3,"Alixer", "BRI","5/Hari", "Not active", "Cancel"),
  createData(4,"Mac", "BRI","0/Hari", "Not active",  "Pending"),
  createData(5,"Gingger", "BRI","12/Hari", "Not active", "Cancel"),
];

export const TableTransaction = () => {
  return (
    <Box>
      <Box
        width={"90%"}
        sx={{
          margin: "auto",
          mt: 5,
          mb: 5
        }}
      >
        <Typography textAlign={"left"} fontWeight={"bold"} fontSize={20}>Incoming Transaction</Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#161616",
          width: "90%",
          margin: "auto"
        }}
      >
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead sx={{
            backgroundColor: "#2B2B2B"
          }}>
            <TableRow>
            <TableCell sx={{
                color: "#EE4622"
              }}>No</TableCell>
              <TableCell sx={{
                color: "#EE4622"
              }}>Users</TableCell>
              <TableCell sx={{
                color: "#EE4622"
              }} align="right">Bukti Transfer</TableCell>
              <TableCell
              sx={{
                color: "#EE4622"
              }} align="right">Remaining Active</TableCell>
              <TableCell 
              sx={{
                color: "#EE4622"
              }} align="right">Status User</TableCell>
              <TableCell 
              sx={{
                color: "#EE4622"
              }} align="right">Status Pembayaran</TableCell>
              <TableCell 
              sx={{
                color: "#EE4622"
              }} align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                 <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right" sx={{
                    color: "#FFFFFF"
                }}>{row.users}</TableCell>
                <TableCell align="right">{row.proofTransfer}</TableCell>
                <TableCell align="right">{row.remainingActive}</TableCell>
                <TableCell align="right">{row.userStatus}</TableCell>
                <TableCell align="right">{row.staatusPayment}</TableCell>
                <TableCell align="right">
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
