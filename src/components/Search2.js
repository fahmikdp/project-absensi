import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

export default function Search2() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          placeholder="Search"
          placeholderProps={{ style: { fontSize: 30 } }}
          sx={{ width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={0}></Grid>
    </Grid>
  );
}
