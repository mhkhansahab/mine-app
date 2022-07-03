/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { styled } from "@mui/material/styles";
import LogoIcon from "../../../../assets/LogoIcon.svg";
import { useMediaQuery, useTheme } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "1000",
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

const Heading = styled("div")(({ theme }) => ({
  fontSize: "30px",
  lineHeight: "40px",
  fontFamily: "Space Mono",
  fontWeight: "700",
}));

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Heading>NODEMINE</Heading>
      </div>
      <div
        style={{ marginLeft: "auto", display: "flex", paddingRight: "15px" }}
      >
        <Button>MINT NOW</Button>
        {!isMobile ? <Button>0xdB0...4660</Button> : null}
      </div>
    </Container>
  );
};

export default Navbar;
