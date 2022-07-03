import { FC } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SubSection1 from "./components/SubSection1";
import SubSection2 from "./components/SubSection2";
import SubSection3 from "./components/Subsection3";

const Container = styled("div")(({ theme }) => ({}));

const Body = styled("div")(({ theme }) => ({
  width: "100%",
  height: "calc (100vh - 70px)",
  marginTop: "70px",
  overflow: "auto",
  backgroundImage: "linear-gradient(115.48deg, #040818 33.86%, #0C0C3F 100%)",
}));

const SectionsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));

const Index: FC = () => {
  return (
    <Container>
      <Navbar />
      <Body>
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
