import { FC } from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  flex: "3",
  height: "500px",
  backgroundColor: "red",
  alignItems: "center",
  margin: "15px",
  borderRadius: "7px",
}));

const SubSection1: FC = () => {
  return <Container>SubSection1</Container>;
};

export default SubSection1;
