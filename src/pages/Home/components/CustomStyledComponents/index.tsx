/* eslint-disable jsx-a11y/alt-text */
import { styled } from "@mui/material/styles";

export const CustomHeading = styled("div")(({ theme }) => ({
  color: "#D1D5DB",
  fontFamily: "Space Mono",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "30px",
}));

export const CustomContainer = styled("div")(({ theme }) => ({
  background: "#0B0D21",
  border: "1px solid #111730",
  borderRadius: "5px",
  margin: "10px 0px",
  padding: "16px 14px",
}));

export const GradientText = styled("h1")(({ theme }) => ({
  width: "fit-content",
  margin: "0px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "48px",
  lineHeight: "48px",
  background: "linear-gradient(93.34deg, #264DF7 0%, #8080FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}));

export const CustomSubHeading = styled("div")(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "16px",
  marginTop: "15px",
  fontFamily: "Open Sans",
  fontWeight: "400",
  color: "#F9FAFB",
}));

export const VerticalSpace = styled("div")(({ theme }) => ({
  width: "100%",
  height: "20px",
}));
