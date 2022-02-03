import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

const SaveButton = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 20,
  marginBottom: 20,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px 82px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#249EA0",
  fontFamily: [
    "poppins",
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#25B8BB",
    padding: "11px 90px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#249EA0",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function SimpanButton() {
  return (
    <Box sx={{ margin: "auto", textAlign: "center" }}>
      <SaveButton variant="contained" disableRipple>
        Simpan
      </SaveButton>
    </Box>
  );
}
