/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SubSection1 from "./components/SubSection1";
import SubSection2 from "./components/SubSection2";
import SubSection3 from "./components/Subsection3";
import { useMediaQuery, useTheme } from "@mui/material";
import BackgroundLogo from "../../assets/backgroundLogo.png";

const Container = styled("div")(({ theme }) => ({
  zIndex: "-200",
  backgroundImage: "linear-gradient(115.48deg, #040818 33.86%, #0C0C3F 100%)",
}));

const Body = styled("div")(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 70px)",
  marginTop: "70px",
  overflow: "auto",
  overflowX: "hidden",
  backgroundImage: `url(${BackgroundLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
}));

const Button = styled("button")(({ theme }) => ({
  width: "fit-content",
  backgroundColor: theme.palette.primary.light,
  padding: "10px 20px",
  maxWidth: "70%",
  margin: "9px",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontFamily: "Space Mono",
  fontWeight: "700",
  fontSize: "16px",
}));

const SectionsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));

const Index: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Navbar />
      <Body>
        {isMobile ? <Button>0xdB0...4660</Button> : null}
        <Banner />
        <SectionsContainer>
          <SubSection1 />
          <SubSection2 />
          <SubSection3 />
        </SectionsContainer>
      </Body>
    </Container>
  );
};

export default Index;
