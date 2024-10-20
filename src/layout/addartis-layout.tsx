import { Box } from "@mui/material"
import { AddArtis } from "../componnent/add-artis"

export const AddartisLayout = () => {
     return (
        <>
        <Box sx={{ height: "100vh", display: "flex" }}>
          <AddArtis />
        </Box>
      </>
     )
}