import { FC, useRef } from "react";
import { styled } from "@mui/material/styles";
import Tile from "./../../../../components/Tile/index";
import img from "./../../../../assets/platinum.png";
import leftArrow from "./../../../../assets/left-arrow.png";
import rightArrow from "./../../../../assets/right-arrow.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { CustomHeading } from "../CustomStyledComponents";

const Container = styled("div")(({ theme }) => ({
  flex: "3",
  textAlign: "left",
  padding: "10px 20px",
  minWidth: "400px",

  [theme.breakpoints.down("sm")]: {
    minWidth: "300px",
  },
}));

const InnerContainer = styled("div")(({ theme }) => ({
  marginTop: "0px",
  display: "flex",
  alignItems: "center",
  cursor: "grab",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Button = styled("div")(({ theme }) => ({
  width: "30px",
  height: "30px",
  background: "#111730",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    background: "#152981",
  },
}));

const SubSection3: FC = () => {
  const ref: any = useRef();

  function scrollLeft(e: any) {
    ref.current.scrollTo({
      left: ref.current?.scrollLeft - 320,
      behavior: "smooth",
    });
  }

  function scrollRight(e: any) {
    ref.current.scrollTo({
      left: ref.current?.scrollLeft + 320,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <CustomHeading>My NodeMine Metals</CustomHeading>
        <div style={{ marginLeft: "auto" }}>
          <ButtonsContainer>
            <Button onClick={scrollLeft}>
              <img src={leftArrow} alt="Left Arrow" />
            </Button>
            <Button onClick={scrollRight}>
              <img src={rightArrow} alt="Right Arrow" />
            </Button>
          </ButtonsContainer>
        </div>
      </div>

      <InnerContainer>
        <ScrollContainer
          innerRef={ref}
          style={{ display: "flex" }}
          horizontal={true}
        >
          <Tile name="#283 - Platinum" imgUrl={img} />
          <Tile name="#283 - Platinum" imgUrl={img} />
          <Tile name="#283 - Platinum" imgUrl={img} />
          <Tile name="#283 - Platinum" imgUrl={img} />
        </ScrollContainer>
      </InnerContainer>
    </Container>
  );
};

export default SubSection3;
