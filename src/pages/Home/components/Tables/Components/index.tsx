import { styled } from "@mui/material/styles";

export const TableContainer = styled("table")(({ theme }) => ({
  background: "#0B0D21",
  border: "1px solid #111730",
  borderRadius: "5px",
  margin: "10px 0px",
  width: "100%",
  maxWidth: "100%",
  overflow: "auto",
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
  fontSize: "14px",
  lineHeight: "16px",
  color: "#9CA3AF",
  opacity: "0.77",
  textAlign: "right",
  width: "105px",
}));

export const TableRow = styled("tr")<{ isLastRow?: boolean }>(
  ({ theme, isLastRow }) => ({
    background: "#0B0D21",
    padding: "12px 15px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: isLastRow ? "none" : "solid 1px #121428",
  })
);

export const Td = styled("td")(({ theme }) => ({
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#F9FAFB",
  opacity: "0.77",
  width: "105px",
}));

export const AccordionTableRow = styled("tr")<{ isLastRow?: boolean }>(
  ({ theme, isLastRow }) => ({
    background: "#0B0D21",
    padding: "0px 16px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: isLastRow ? "none" : "solid 1px #121428",

    [theme.breakpoints.down("sm")]: {
      padding: "0px 8px",
    },
  })
);

export const AccordionTableRowHeader = styled("tr")(({ theme }) => ({
  background: "#121428",
  padding: "8px 30px",
  display: "flex",
  borderRadius: "3px",
  justifyContent: "space-between",
}));
