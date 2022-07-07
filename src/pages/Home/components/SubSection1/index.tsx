import { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  CustomHeading,
  CustomContainer,
  GradientText,
  CustomSubHeading,
  VerticalSpace,
} from "../CustomStyledComponents/index";
import LatestWinners from "../Tables/LatestWinners";
import MyWinnings from "../Tables/MyWinnings";

const Container = styled("div")(({ theme }) => ({
  flex: "3",
  textAlign: "left",
  padding: "10px 20px",
  minWidth: "400px",

  [theme.breakpoints.down("sm")]: {
    minWidth: "300px",
  },
}));

const TableContainer = styled("div")(({ theme }) => ({
  width: "100%",
  overflow: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const SubSection1: FC = () => {
  return (
    <Container>
      <CustomHeading>Next Giveaway</CustomHeading>
      <CustomContainer>
        <GradientText>2:21:56:42</GradientText>
        <CustomSubHeading>Friday, August 23th at 5:00 UTC</CustomSubHeading>
      </CustomContainer>
      <VerticalSpace />
      <CustomHeading>Latest Winners</CustomHeading>
      <TableContainer>
        <LatestWinners />
      </TableContainer>
      <VerticalSpace />
      <CustomHeading>My Winnings</CustomHeading>
      <TableContainer>
        <MyWinnings />
      </TableContainer>
    </Container>
  );
};

export default SubSection1;
