import { FC } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SubSection1 from "./components/SubSection1";
import SubSection2 from "./components/SubSection2";
import SubSection3 from "./components/Subsection3";

const Body = styled("div")(({ theme }) => ({
  width: "100%",
}));

const SectionsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
}));

const Index: FC = () => {
  return (
    <Body>
      <Navbar />
      <Banner />
      <SectionsContainer>
        <SubSection1 />
        <SubSection2 />
        <SubSection3 />
      </SectionsContainer>
    </Body>
  );
};

export default Index;
