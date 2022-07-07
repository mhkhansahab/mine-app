import { FC, useRef } from "react";
import { styled } from "@mui/material/styles";
import Tile from "./../../../../components/Tile/index";
import img from "./../../../../assets/platinum.png";
import leftArrow from "./../../../../assets/left-arrow.png";
import rightArrow from "./../../../../assets/right-arrow.png";
import ScrollContainer from "react-indiana-drag-scroll";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  userSelect: "none",
  width: "400px",
  margin: "15px",
  borderRadius: "7px",
  display: "flex",
  alignItems: "flex-start",

  [theme.breakpoints.down("lg")]: {
    margin: "0 auto",
    width: "90%",
    marginBottom: "20px",
  },
}));

const InnerContainer = styled("div")(({ theme }) => ({
  marginTop: "40px",
  display: "flex",
  alignItems: "center",
  cursor: "grab",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
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
      <ButtonsContainer>
        <Button onClick={scrollLeft}>
          <img src={leftArrow} alt="Left Arrow" />
        </Button>
        <Button onClick={scrollRight}>
          <img src={rightArrow} alt="Right Arrow" />
        </Button>
      </ButtonsContainer>

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
