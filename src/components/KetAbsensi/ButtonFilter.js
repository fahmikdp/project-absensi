import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import "./Button.css";

const DataButton = ["All", "Putih", "Kuning", "Biru", "Coklat", "Hitam"];

//   Nyoba slider button tapi error
// let slider = document.querySelector(".slider");
// let innerSlider = document.querySelector(".slider-inner");

// let pressed = false;
// let startx;
// let x;

// slider.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startx = e.offsetX - innerSlider.offsetLeft;
//   slider.style.cursor = "grabbing";
// });

// slider.addEventListener("mouseenter", (e) => {
//   slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", (e) => {
//   pressed = false;
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;

//   innerSlider.style.left = `${x - startx}px`;

//   ButtonFilters();
// });

const ButtonFilters = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 10,
  marginBottom: 10,
  marginRight: 5,
  width: "90%",
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
  fontFamily: [
    "Roboto",
    "poppins",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ].join(","),
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
});

export default function ButtonFilter() {
  // let outer = slider.getBoundingClientRect();
  // let inner = innerSlider.getBoundingClientRect();

  // if (parseInt(innerSlider.style.left) > 0) {
  //   innerSlider.style.left = "0px";
  // } else if (inner.right < outer.right) {
  //   innerSlider.style.left = `-${inner.width - outer.width}px`;
  // }
  return (
    <Box className="button">
      {DataButton.map((sabuk) => (
        <ButtonFilters variant="contained">{sabuk}</ButtonFilters>
      ))}
    </Box>
  );
}
