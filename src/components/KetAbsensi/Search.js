import React from "react";
// Import Component MUI
import { IconButton, InputAdornment, TextField } from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPunyaAdel() {
  return (
    <>
      <TextField
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon
                  sx={{
                    fontSize: 22,
                    color: "grey",
                    "&:hover": { color: "#249EA0" },
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            fontSize: 15,
            height: 40,
          },
        }}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey",
            borderRadius: 2,
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#249EA0",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#249EA0",
            },
        }}
      />
    </>
  );
}
