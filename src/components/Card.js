import React from "react";
import { Box, Card, CardContent, Avatar, Typography } from "@mui/material";

export default function Cards() {
  return (
    <Box>
      <Card
        sx={{
          xs: 12,
          border: "#0000008A solid",
          width: "97%",
          ml: "2px",
        }}
      >
        <Avatar sx={{ bgcolor: "salmon" }}>Y</Avatar>
        <CardContent sx={{ mt: -5 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: 16,
              fontFamily: "poppins",
              fontWeight: "bold",
              ml: 5,
            }}
          >
            Peserta
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 12, fontFamily: "poppins" }}
          >
            Sabuk Putih
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
