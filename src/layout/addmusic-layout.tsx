import { Box } from "@mui/material";
import { AddMusic } from "../componnent/add-musik";

const AddmusicLayout = () => {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <AddMusic />
      </Box>
    </>
  );
};

export default AddmusicLayout;
