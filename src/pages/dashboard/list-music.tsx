import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

export const ListMusic = () => {
   const listMusic = [
      {
         image: "public/assets/images/macarena.jpg",
         title: "Macarena",
         year: 2020,
         author: "Tyga",
      },
      {
         image: "assets/images/author2.png",
         title: "Circles",
         year: 2019,
         author: "Post Malone",
      },
      {
         image: "public/assets/images/taste.jpg",
         title: "Taste",
         year: 2019,
         author: "Tyga",
      },
      {
         image: "public/assets/images/venom.jpg",
         title: "Venom",
         year: 2018,
         author: "Eminem",
      },
      {
         image: "assets/images/author1.png",
         title: "History",
         year: 2018,
         author: "Rich Brian",
      },
      {
         image: "public/assets/images/venom.jpg",
         title: "Lucky you",
         year: 2018,
         author: "Eminem feat Joyner lucas ",
      },

      {
         image: "assets/images/author4.png",
         title: "Slow Dancing ..",
         year: 2018,
         author: "Joji",
      },
      {
         image: "public/assets/images/adele.jpg",
         title: "All I Ask",
         year: 2015,
         author: "Adele",
      },
      {
         image: "public/assets/images/hookah.jpg",
         title: "Haokah",
         year: 2014,
         author: "Tyga ft. Young Thug",
      },
      {
         image: "public/assets/images/laymedown.jpg",
         title: "Lay Me Down",
         year: 2014,
         author: "Sam Smith",
      },
      {
         image: "public/assets/images/bruno_mars.jpg",
         title: "billionaire",
         year: 2010,
         author: "Bruno Mars",
      },
      {
         image: "public/assets/images/thislove.jpg",
         title: "This Love",
         year: 2002,
         author: "Marron 5",
      },
   ];

   return (
      <Box
         sx={{
            backgroundColor: "#0D0D0D",
            height: "50vh",
            width: "100vw",
         }}
      >
         <Typography
            sx={{
               color: "#EE4622",
               fontSize: "20px",
               textAlign: "center",
               py: 2,
            }}
         >
            Dengarkan Dan Rasakan
         </Typography>

         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               margin: "0 auto",
               flexWrap: "wrap",
               width: "70%",
               gap: 2,
               maxHeight: "40vh",
               overflowY: "auto",
               overflowX: "hidden",

               "&::-webkit-scrollbar": {
                  width: "8px",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
               },
               "&:hover::-webkit-scrollbar": {
                  opacity: 1,
               },
               "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#0D0D0D",
                  borderRadius: "10px",
               },
               "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#777",
               },
            }}
         >
            {listMusic.map((item, index) => (
               <Card
                  key={index}
                  sx={{
                     width: 200,
                     backgroundColor: "#3A3A3A",
                     borderRadius: "10px",
                     marginBottom: 2,
                  }}
               >
                  <Box sx={{ textAlign: "center" }}>
                     <img
                        src={item.image}
                        alt=""
                        style={{
                           width: "90%",
                           height: "150px",
                           marginTop: "8px",
                        }}
                     />
                  </Box>
                  <CardContent>
                     <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                     >
                        <Typography
                           sx={{
                              color: "#FFFFFF",
                              fontSize: "16px",
                           }}
                        >
                           {item.title}
                        </Typography>
                        <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                           {item.year}
                        </Typography>
                     </Stack>
                     <Typography
                        sx={{ color: "#FFFFFF", fontSize: "14px", mt: 1 }}
                     >
                        {item.author}
                     </Typography>
                  </CardContent>
               </Card>
            ))}
         </Box>
      </Box>
   );
};
