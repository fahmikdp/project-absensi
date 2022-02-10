import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import Checkbox from "./Checkbox";
import lotsOfData from "./DataAnggota";

const Data = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
        <Box key={index}>
          <Card
            sx={{
              maxWidth: 520,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 60,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Grid container spacing={2}>
              {/* Avatar */}
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
                  {/* Nama Peserta */}
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
                  {/* Jenis Sabuk */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12, fontFamily: "Roboto" }}
                  >
                    {data.sabuk}
                  </Typography>
                </CardContent>
              </Grid>
              {/* Checkbox */}
              <Grid item xs={2} md={2} lg={1}>
                <Checkbox />
              </Grid>
            </Grid>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default Data;
