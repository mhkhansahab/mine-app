import { FC } from "react";
import { styled } from "@mui/material/styles";
import Tile from './../../../../components/Tile/index';
import img from './../../../../assets/platinum.png';

const Container = styled("div")(({ theme }) => ({
  userSelect: 'none',
  width: '400px',
  backgroundColor: "red",
  margin: "15px",
  borderRadius: "7px",
  display: 'flex',
  overflowX: 'scroll'
}));

const InnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: 'grab' 
}));


const SubSection3: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
        <Tile name="#283 - Platinum" imgUrl={img} />
      </InnerContainer>
    </Container>
  );
};

export default SubSection3;
