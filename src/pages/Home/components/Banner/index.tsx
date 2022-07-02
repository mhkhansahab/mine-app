import { FC } from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  flex: "1",
  height: "90px",
  backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  margin: "15px",
  borderRadius: "7px",
}));

const Item = styled("div")(({ theme }) => ({
  width: "fit-cotent",
  padding: "7px 14px",
  margin: "9px",
}));

const Banner: FC = () => {
  return (
    <Container>
      <Item>Congratulation</Item>
    </Container>
  );
};

export default Banner;
