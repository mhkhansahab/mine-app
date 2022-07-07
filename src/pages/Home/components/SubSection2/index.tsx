import { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  CustomHeading,
  CustomContainer,
  GradientText,
  VerticalSpace,
} from "../CustomStyledComponents/index";
import Hardware from "../Tables/Hardware";
import Investments from "../Tables/Investments";

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

const SubSection2: FC = () => {
  return (
    <Container>
      <CustomHeading>Treasury Balance</CustomHeading>
      <CustomContainer>
        <GradientText style={{ fontSize: "30px", lineHeight: "30px" }}>
          307 AVAX ($9,300)
        </GradientText>
      </CustomContainer>
      <VerticalSpace />
      <CustomHeading>Hardware</CustomHeading>
      <TableContainer>
        <Hardware />
      </TableContainer>
      <VerticalSpace />
      <CustomHeading>Investments</CustomHeading>
      <TableContainer>
        <Investments />
      </TableContainer>
    </Container>
  );
};

export default SubSection2;
