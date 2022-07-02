import { FC } from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: "red",
  display: "flex",
  alignButtons: "center",
}));

const Button = styled("button")(({ theme }) => ({
  width: "fit-cotent",
  backgroundColor: "blue",
  padding: "7px 14px",
  margin: "9px",
  color: "white",
  border: "none",
}));

const Navbar: FC = () => {
  return (
    <Container>
      <h3>&nbsp;NODEMINE</h3>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Button>MINT NOW</Button>
        <Button>0xdB0...4660</Button>
      </div>
    </Container>
  );
};

export default Navbar;
