import { FC } from "react";
import { styled } from "@mui/material/styles";

type Props = {
  imgUrl: string;
  name: string;
};

const MainDiv = styled("div")(({ theme }) => ({
  width: "300px",
  margin: "10px",
  borderRadius: '5px',
  background: '#0B0D21',
  border: '1px solid #111730',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: '300px',

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    margin: "auto",
    marginTop: "15px",
  },
}));

const TileImage = styled("img")(({ theme }) => ({
  width: "100%",
}));

const TileName = styled("span")(({ theme }) => ({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  margin: "0px",
  color: theme.palette.text.primary,
  padding: '12px',
  marginLeft: '8px'
}));

const index: FC<Props> = ({ imgUrl, name }) => {
  return (
    <MainDiv>
      <TileImage src={imgUrl}></TileImage>
      <TileName>{name}</TileName>
    </MainDiv>
  );
};

export default index;
