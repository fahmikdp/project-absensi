import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

const DataButton = ["All", "Putih", "Kuning"];

const ButtonFilters = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 2,
  width: "25%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 11,
  padding: "5px 22px",
  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.5,
  backgroundColor: "#25B8BB",
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#25B8BB",
    padding: "5px 26px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#25B8BB",
  },
  "&:focus": {},
});

export default function ButtonFilter() {
  return (
    <Box>
      {DataButton.map((sabuk) => (
        <ButtonFilters variant="contained" disableRipple>
          {sabuk}
        </ButtonFilters>
      ))}
    </Box>
  );
}
