import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Typography,
  TextField,
  Box,
  Container,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { SaveButton } from "../components/FormAbsensi/Buttonfloating";
import { Link } from "react-router-dom";

export default function Formijin() {
  return (
    <>
      <Link to="/">
        <Navbar>&nbsp;Form Ijin</Navbar>
      </Link>
      <Box sx={{ mt: 9 }}>
        <Container>
          <Grid alignItems="center" sx={{ mb: 2 }}>
            {/* Nama Anggota */}
            <TextField
              placeholder="Nama Anggota"
              type="text"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
              }}
              inputProps={{
                style: {
                  fontSize: 12,
                  height: 4,
                },
              }}
            ></TextField>
          </Grid>

          <Grid alignItems="center" sx={{ mb: 2 }}>
            {/* Tingkatan */}
            <TextField
              placeholder="Tingkatan"
              type="text"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
              }}
              inputProps={{
                style: {
                  fontSize: 12,
                  height: 4,
                },
              }}
            ></TextField>
          </Grid>

          <Grid alignItems="center" sx={{ mb: 2 }}>
            {/* Keterangan */}
            <TextField
              placeholder="Keterangan"
              type="text"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#249EA0",
                  },
              }}
              inputProps={{
                style: {
                  fontSize: 12,
                  height: 50,
                },
              }}
            ></TextField>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mt: 8 }}>
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            bgcolor: "transparent",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              margin: "auto",
              textAlign: "center",
              width: "95%",
            }}
          >
            <Button variant="contained" disableRipple sx={SaveButton}>
              Simpan
            </Button>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}
