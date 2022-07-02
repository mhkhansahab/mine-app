import { FC, useRef } from "react";
import { styled } from "@mui/material/styles";
import Tile from './../../../../components/Tile/index';
import img from './../../../../assets/platinum.png';
import leftArrow from './../../../../assets/left-arrow.png';
import rightArrow from './../../../../assets/right-arrow.png';

const Container = styled("div")(({ theme }) => ({
  position: 'relative',
  userSelect: 'none',
  width: '400px',
  margin: "15px",
  borderRadius: "7px",
  display: 'flex',
  alignItems: 'flex-start',
  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none'
  }
}));

const InnerContainer = styled("div")(({ theme }) => ({
  marginTop: '40px',
  display: "flex",
  alignItems: "center",
  cursor: 'grab'
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  position: 'absolute',
  right: '0px',
  top: '0px',
  display: "flex",
  alignItems: "center",
}));

const Button = styled("div")(({ theme }) => ({
  width: '30px',
  height: '30px',
  background: '#111730',
  cursor: 'pointer',
  ':hover': {
    background: '#152981'
  }
}));



const SubSection3: FC = () => {
  const ref: any = useRef();

  function scrollLeft(e: any) {
    console.log(ref.current)
    console.log(ref.current.scrollLeft);
  }

  function scrollRight(e: any) {
    console.log(ref.current)
    console.log(ref.current.scrollRight);
 
  }

  return (
    <Container>
      <ButtonsContainer>
        <Button  onClick={scrollLeft}>
          <img src={leftArrow} alt='Left Arrow' />
        </Button>
        <Button onClick={scrollRight}>
          <img src={rightArrow} alt='Right Arrow' />
        </Button>
      </ButtonsContainer>

      <InnerContainer
        ref={ref}>
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
      </InnerContainer>
    </Container>
  );
};

export default SubSection3;
