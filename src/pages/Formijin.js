import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Typography,
  TextField,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { SaveButton } from "../components/FormAbsensi/Buttonfloating";
import { Link } from "react-router-dom";
import { ArrowBackTwoTone } from "@mui/icons-material";

export default function Formijin() {
  const [nama, setNama] = useState("");
  const [tingkatan, setTingkatan] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(
      `\n`,
      `Nama: ${nama}`,
      `\n`,
      `Tingkatan: ${tingkatan}`,
      `\n`,
      `Keterangan: ${keterangan}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton sx={{ color: "#fff" }}>
              <ArrowBackTwoTone />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                &nbsp;Form Izin
              </Typography>
            </IconButton>
          </Link>
        </Navbar>
        <Box sx={{ mt: 9 }}>
          <Container>
            <Grid alignItems="center" sx={{ mb: 2 }}>
              {/* Nama Anggota */}
              <TextField
                placeholder="Nama Anggota"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
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
                value={tingkatan}
                onChange={(e) => setTingkatan(e.target.value)}
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
                multiline
                rows={3}
                placeholder="Keterangan"
                type="text"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
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
                    height: 40,
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
              <Button
                type="submit"
                variant="contained"
                disableRipple
                sx={SaveButton}
              >
                Simpan
              </Button>
            </Box>
          </AppBar>
        </Box>
      </form>
    </>
  );
}
