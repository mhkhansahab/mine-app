/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { styled } from "@mui/material/styles";
import LogoName from "../../../../assets/LogoName.svg";
import LogoIcon from "../../../../assets/LogoIcon.svg";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const Button = styled("button")(({ theme }) => ({
  width: "fit-cotent",
  backgroundColor: theme.palette.primary.light,
  padding: "10px 20px",
  margin: "9px",
  color: "white",
  border: "none",
  cursor: "pointer",
}));

const Navbar: FC = () => {
  return (
    <Container>
      <div
        style={{
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <img src={LogoIcon} /> &nbsp;
        <img src={LogoName} />
      </div>
      <div
        style={{ marginLeft: "auto", display: "flex", paddingRight: "15px" }}
      >
        <Button>MINT NOW</Button>
        <Button>0xdB0...4660</Button>
      </div>
    </Container>
  );
};

export default Navbar;
