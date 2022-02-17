import React from "react";
import { Button, Box } from "@mui/material";
import "./Button.css";

const DataButton = ["All", "Putih", "Kuning", "Biru", "Coklat", "Hitam"];

const styleBtn = {
  transition: " 1ms smooth",
  marginTop: 1,
  marginBottom: 1,
  marginRight: 1,
  width: "100%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 11,
  padding: "5px 22px",
  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.2,
  backgroundColor: "#fff",
  color: "#25B8BB",
  borderColor: "#25B8BB",
  fontFamily: "Roboto",
  "&:hover": {
    color: "#fff",
    boxShadow: "none",
    backgroundColor: "#25B8BB",
  },
  "&:active": {
    color: "#fff",
    backgroundColor: "#25B8BB",
  },
  "&:focus": {
    color: "#fff",
    backgroundColor: "#25B8BB",
  },
};

export default function ButtonFilter() {
  return (
    <Box className="box">
      {DataButton.map((sabuk) => (
        <Button sx={styleBtn} variant="contained">
          {sabuk}
        </Button>
      ))}
    </Box>
  );
}
