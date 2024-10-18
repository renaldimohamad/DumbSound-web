import { Button, Input, Stack } from "@mui/material";

export const PaymentForm = () => {
   return (
      <Stack alignItems={"center"} justifyContent={"center"} mt={10} gap={2}>
         <Input
            disableUnderline
            placeholder="Input your account number"
            sx={{
               width: "20%",
               border: "2px solid #D2D2D2",
               color: "white",
               borderRadius: "5px",
               padding: "5px",
               backgroundColor: "#3A3A3A",
            }}
            inputProps={{
               style: {
                  paddingLeft: "10px",
               },
            }}
         />

         <Input
            disableUnderline
            placeholder="Attche your account number"
            sx={{
               width: "20%",
               border: "2px solid #D2D2D2",
               borderRadius: "5px",
               padding: "5px",
               backgroundColor: "#3A3A3A",
               "& input::placeholder": {
                  color: "#FF5733",
                  fontWeight: "bold",
                  opacity: 1,
               },
            }}
            inputProps={{
               style: {
                  paddingLeft: "10px",
               },
            }}
         />

         {/* <Icon
            icon="material-symbols:attach-file-rounded"
            style={{ color: #EE4622 }}
         /> */}

         <Button
            variant="contained"
            sx={{
               width: "20%",
               backgroundColor: "#F58033",
               borderRadius: "5px",
               textTransform: "none",
            }}
         >
            Send
         </Button>
      </Stack>
   );
};
