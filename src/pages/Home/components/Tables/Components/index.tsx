import { styled } from "@mui/material/styles";

export const TableContainer = styled("table")(({ theme }) => ({
  background: "#0B0D21",
  border: "1px solid #111730",
  borderRadius: "5px",
  margin: "10px 0px",
  width: "100%",
  padding: "0px",
}));

export const TableRowHeader = styled("tr")(({ theme }) => ({
  background: "#121428",
  padding: "8px 15px",
  display: "flex",
  borderRadius: "3px",
  justifyContent: "space-between",
}));

export const Th = styled("th")(({ theme }) => ({
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#9CA3AF",
  opacity: "0.77",
  textAlign: "right",
}));

export const TableRow = styled("tr")(({ theme }) => ({
  background: "#0B0D21",
  padding: "12px 15px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "solid 1px #121428",
}));

export const Td = styled("td")(({ theme }) => ({
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#F9FAFB",
  opacity: "0.77",
}));
