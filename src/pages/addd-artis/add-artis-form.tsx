import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export const AddArtisForm = () => {
    const [age, setAge] = React.useState("");
    const navigate = useNavigate()
  
    const addArtist = () => {
      navigate("/addmusic")
    }
    
    const handleChange = (event: any) => {
      setAge(event.target.values as string);
    };
    
  
    return (
      <>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          mt={4}
          gap={2}
        >
          <Typography
            textAlign={"left"}
            fontWeight={"bold"}
            width={"80%"}
            fontSize={20}
            mb={5}
          >
            {" "}
            Add Artis
          </Typography>
            <Input
              disableUnderline
              placeholder="Name"
              sx={{
                width: "80%",
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
            placeholder="Old"
            sx={{
              width: "80%",
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
          <Box sx={{ width: "80%", }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#8C8C8C",
                  top: "50%",
                  px: 2,
                  transform: "translateY(-50%)",
                  zIndex: 1
                }}
              >
                Solo
              </InputLabel>
              <Select
                sx={{
                color: "white",
                  border: "2px solid #D2D2D2",
                  borderRadius: "5px",
                  backgroundColor: "#3A3A3A",
                  height: "46px",
                  "& .MuiSelect-select": {
                    padding: "12px 14px",
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Solo"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Input
            disableUnderline
            placeholder="Start a Career"
            sx={{
              width: "80%",
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
  
          <Button
          onClick={addArtist}
            variant="outlined"
            sx={{
              backgroundColor: "#F58033",
              borderRadius: "5px",
              width: "15%",
              color: "white",
              textTransform: "none",
            }}
          >
            Add Artis
          </Button>
        </Box>
      </>
    );
  };
  