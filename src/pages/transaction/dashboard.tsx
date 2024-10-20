import { Box, Typography } from "@mui/material";
import { Navigation } from "../../componnent/common/navigation/navigation";
import { TableTransaction } from "./table-transaction";

export const Dashboard = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#161616",
          height: "100vh",
          width: "100vw",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Navigation
              bgColor={"#1F1F1F"}
              px={3}
              py={1}
              boxShadow={"3px 4px 15px black"}
            />
            <TableTransaction />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
