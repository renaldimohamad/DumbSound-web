import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { InlineIcon } from "@iconify/react";

function createData(
   id: number,
   users: string,
   proofTransfer: string,
   remainingActive: string,
   userStatus: string,
   staatusPayment: string
) {
   return {
      id,
      users,
      proofTransfer,
      remainingActive,
      userStatus,
      staatusPayment,
   };
}

const rows = [
   createData(
      1,
      "Rahman Ismail",
      "https://seeklogo.com/images/B/brimo-logo-70A86EB4B9-seeklogo.com.png",
      "26/Hari",
      "active",
      "Aprove"
   ),
   createData(
      2,
      "Abdullah",
      "https://seeklogo.com/images/B/bca-mobile-app-logo-226045B76E-seeklogo.com.png",
      "30/Hari",
      "active",
      "Aprove"
   ),
   createData(
      3,
      "Ginger",
      "https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png",
      "5/Hari",
      "Not active",
      "Cancel"
   ),
   createData(
      4,
      "Roni Abdul",
      "https://seeklogo.com/images/B/bca-mobile-app-logo-226045B76E-seeklogo.com.png",
      "0/Hari",
      "Not active",
      "Pending"
   ),
   createData(
      5,
      "Angga",
      "https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png",
      "12/Hari",
      "Not active",
      "Cancel"
   ),
];

export const TableTransaction = () => {
   return (
      <Box>
         <Box
            width={"90%"}
            sx={{
               margin: "auto",
               mt: 5,
               mb: 5,
            }}
         >
            <Typography textAlign={"left"} fontWeight={"bold"} fontSize={24}>
               Incoming Transaction
            </Typography>
         </Box>
         <TableContainer
            component={Paper}
            sx={{
               margin: "auto",
               backgroundColor: "#161616",
               width: "90%",
            }}
         >
            <Table sx={{ width: "100%" }} aria-label="simple table">
               <TableHead
                  sx={{
                     backgroundColor: "#2B2B2B",
                  }}
               >
                  <TableRow>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                     >
                        No
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                     >
                        Users
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                        align="right"
                     >
                        Bukti Transfer
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                        align="right"
                     >
                        Remaining Active
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                        align="right"
                     >
                        Status User
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                        align="right"
                     >
                        Status Pembayaran
                     </TableCell>
                     <TableCell
                        sx={{
                           color: "#EE4622",
                        }}
                        align="right"
                     >
                        Action
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((item, index) => (
                     <TableRow
                        key={item.id}
                        sx={{
                           backgroundColor:
                              index % 2 === 0 ? "#3A3A3A" : "#2B2B2B",
                           "&:last-child td, &:last-child th": { border: 0 },
                        }}
                     >
                        <TableCell
                           component="th"
                           scope="row"
                           sx={{
                              color: "#FFFFFF",
                              textAlign: "left",
                           }}
                        >
                           {item.id}
                        </TableCell>
                        <TableCell
                           align="right"
                           sx={{
                              color: "#FFFFFF",
                              textAlign: "left",
                           }}
                        >
                           {item.users}
                        </TableCell>
                        <TableCell
                           align="right"
                           sx={{
                              textAlign: "center",
                              width: "100px",
                           }}
                        >
                           <img
                              src={item.proofTransfer}
                              alt="Proof Transfer"
                              style={{ width: "50px", height: "auto" }}
                           />
                        </TableCell>

                        <TableCell
                           align="right"
                           sx={{
                              color: "#FFFFFF",
                           }}
                        >
                           {item.remainingActive}
                        </TableCell>

                        <TableCell
                           align="right"
                           sx={{
                              color:
                                 item.userStatus === "Not active"
                                    ? "#FF0000"
                                    : "#0ACF83",
                           }}
                        >
                           {item.userStatus}
                        </TableCell>
                        <TableCell
                           align="right"
                           sx={{
                              color:
                                 item.staatusPayment === "Aprove"
                                    ? "#0ACF83"
                                    : item.staatusPayment === "Pending"
                                    ? "#FFA500"
                                    : item.staatusPayment === "Cancel"
                                    ? "#FF0000"
                                    : "#FFFFFF",
                           }}
                        >
                           {item.staatusPayment}
                        </TableCell>
                        <TableCell align="right">
                           <InlineIcon
                              icon="bxs:down-arrow"
                              style={{ color: "#1C9CD2", marginRight: "10px" }}
                           />
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};
