import {
   Box,
   Button,
   Input,
   InputAdornment,
   Stack,
   Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentForm = () => {
   const [value, setValue] = useState(0);
   const [getNilai, setGetNilai] = useState("");
   const linkRef = useRef(null);

   const goTo = (ref: any) => {
      window.scrollTo({
         top: ref.offsetTop,
         behavior: "smooth",
         left: 0,
      });
   };

   useEffect(() => {
      console.log("value", value);

      return () => {
         console.log("value", value);
      };
   });

   useEffect(() => {
      if (value > 10) {
         setGetNilai("barang max 10");
      } else if (value < 10) {
         setGetNilai("");
      }

      console.log("value update", value);
   }, [value]);

   const navigate = useNavigate();

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
            type="file"
            disableUnderline
            placeholder="Attach Thumbnail"
            sx={{
               border: "2px solid #D2D2D2",
               color: "white",
               borderRadius: "5px",
               padding: "5px",
               backgroundColor: "#3A3A3A",
               display: "none",
            }}
            inputProps={{
               accept: "image/*",
               style: {
                  paddingLeft: "10px",
               },
            }}
            id="file-upload-input"
         />

         <label
            htmlFor="file-upload-input"
            style={{
               display: "flex",
               alignItems: "center",
               border: "2px solid #D2D2D2",
               borderRadius: "5px",
               backgroundColor: "#3A3A3A",
               padding: "5px",
               cursor: "pointer",
               width: "19.4%",
               color: "red",
            }}
         >
            <Stack
               direction={"row"}
               justifyContent={"space-between"}
               alignItems="center"
               width="100%"
               padding={"3px"}
            >
               Attche your account number
               <InputAdornment position="end">
                  <Stack sx={{ alignItems: "center" }}>
                     <img
                        src="assets/images/Frame.png"
                        alt="file"
                        style={{
                           color: "#B2B2B2",
                           width: "20px",
                           height: "25px",
                           marginLeft: "5px",
                        }}
                     />
                  </Stack>
               </InputAdornment>
            </Stack>
         </label>

         <Button
            variant="contained"
            onClick={() => navigate("/transaction")}
            sx={{
               width: "20%",
               backgroundColor: "#F58033",
               borderRadius: "5px",
               textTransform: "none",
            }}
         >
            Send
         </Button>

         <Box
            mt={10}
            width={"100%"}
            flexDirection={"column"}
            display={"flex"}
            gap={2}
            alignItems={"center"}
         >
            <Typography>Total : {value}</Typography>
            <Typography>{getNilai}</Typography>
            <Stack direction={"row"} gap={2}>
               <Button
                  onClick={() => setValue(value + 1)}
                  variant="contained"
                  sx={{
                     width: "20%",
                     backgroundColor: "#F58033",
                     borderRadius: "5px",
                     textTransform: "none",
                  }}
               >
                  +
               </Button>
               <Button
                  onClick={() => setValue(value - 1)}
                  variant="contained"
                  sx={{
                     width: "20%",
                     backgroundColor: "#F58033",
                     borderRadius: "5px",
                     textTransform: "none",
                  }}
               >
                  -
               </Button>
               <Button
                  onClick={() => goTo(linkRef.current)}
                  variant="contained"
                  sx={{
                     backgroundColor: "#F58033",
                     borderRadius: "5px",
                     textTransform: "none",
                  }}
               >
                  Masukkan Keranjang
               </Button>
            </Stack>

            <Box>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis beatae sed deserunt saepe? Debitis adipisci delectus
                  officiis illum? Consequuntur aliquam repellendus et quis in
                  labore tempore commodi laboriosam voluptates maxime unde,
                  inventore hic ipsa, recusandae repudiandae deleniti quae
                  facere corporis exercitationem maiores ducimus vero. Dolorum
                  nisi accusantium assumenda veritatis quia mollitia repudiandae
                  distinctio nemo tenetur sed molestiae autem rem omnis expedita
                  nobis ipsam nesciunt ducimus, similique dolor velit possimus
                  blanditiis id. Facere, molestias rerum. Minus assumenda
                  voluptates harum quibusdam quod consequatur dolor, deleniti
                  ducimus amet atque. Vero totam ea eius ex doloribus, vitae,
                  ipsa, sapiente dolor cum fuga corporis perspiciatis?
               </p>
               <a
                  href="https://www.youtube.com/watch?v=u7c-Fs70gSk"
                  ref={linkRef}
                  target="_blank"
               >
                  {" "}
                  Read more
               </a>
            </Box>
         </Box>
      </Stack>
   );
};
