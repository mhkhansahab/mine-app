import { FC } from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  flex: "1",
  height: "fit-content",
  backgroundImage: `linear-gradient(93.34deg, #264DF7 0%, #8080FF 100%);`,
  display: "flex",
  alignItems: "center",
  margin: "15px",
  borderRadius: "5px",
  border: "1px solid #F3F4F6",
}));

const Heading = styled("div")(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "40px",
  fontFamily: "Space Mono",
  fontWeight: "700",
}));

const SubHeading = styled("div")(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "16px",
  marginTop: "15px",
  fontFamily: "Open Sans",
  fontWeight: "400",
}));

const Banner: FC = () => {
  return (
    <Container>
      <div style={{ textAlign: "left", margin: "21px 18px" }}>
        <Heading>CONGRATULATIONS!</Heading>
        <SubHeading>
          Your NFT #271 and #283 have won our latest giveaway
        </SubHeading>
      </div>

      <div
        style={{ textAlign: "right", margin: "21px 18px", marginLeft: "auto" }}
      >
        <Heading>120 USDC + 2 AVAX</Heading>
        <SubHeading>has been delivered to your wallet</SubHeading>
      </div>
    </Container>
  );
};

export default Banner;
