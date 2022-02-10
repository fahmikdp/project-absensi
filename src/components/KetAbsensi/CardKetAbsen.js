import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import lotsOfData from "../FormAbsensi/DataAnggota";

const Data = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
        <Box key={index}>
          <Card
            sx={{
              maxWidth: 520,
              xs: 12,
              margin: "auto",
              mb: 2,
              height: 150,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1.5} md={1} lg={0.5}>
                <Avatar
                  sx={{ bgcolor: "#F78104", ml: 1, mt: 1 }}
                  src={data.img}
                >
                  {data.ava}
                </Avatar>
              </Grid>
              <Grid item xs={8.5} md={9} lg={10}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: 16,
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      ml: 0,
                      mt: -1,
                    }}
                  >
                    {data.nama}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12, fontFamily: "Roboto" }}
                  >
                    {data.sabuk}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: -1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                color="inherit"
                sx={{
                  color: "grey",
                }}
              >
                <Button sx={{ display: "block" }}>
                  <Typography sx={{ fontSize: 10 }}>Tidak Hadir</Typography>
                  <Typography sx={{ fontSize: 25 }}>5</Typography>
                </Button>
                <Button sx={{ display: "block" }}>
                  <Typography sx={{ fontSize: 10 }}>Sakit</Typography>
                  <Typography sx={{ fontSize: 25 }}>2</Typography>
                </Button>
                <Button sx={{ display: "block" }}>
                  <Typography sx={{ fontSize: 10 }}>Izin</Typography>
                  <Typography sx={{ fontSize: 25 }}>2</Typography>
                </Button>
                <Button sx={{ display: "block" }}>
                  <Typography sx={{ fontSize: 10 }}>Presentase</Typography>
                  <Typography sx={{ fontSize: 25 }}>92%</Typography>
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default Data;