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
              xs: 12,
              //   border: "#0000008A 1px solid",
              width: "90%",
              margin: "auto",
              mb: 2,
              height: 60,
              boxShadow: "1px 1px #a1a1a1",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1.5} md={1} lg={0.5}>
                <Avatar sx={{ bgcolor: "#F78104", ml: 1, mt: 1 }}>
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
                      fontFamily: "poppins",
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
                    sx={{ fontSize: 12, fontFamily: "poppins", ml: 0 }}
                  >
                    {data.info}
                  </Typography>
                </CardContent>
              </Grid>
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
