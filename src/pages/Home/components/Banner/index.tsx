import { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import Confetti from "react-confetti";

const Container = styled("div")(({ theme }) => ({
  flex: "1",
  height: "fit-content",
  backgroundImage: `linear-gradient(93.34deg, #264DF7 0%, #8080FF 100%);`,
  display: "flex",
  alignItems: "center",
  margin: "15px",
  marginTop: "25px",
  borderRadius: "5px",
  border: "1px solid #F3F4F6",
  flexWrap: "wrap",
  position: "relative",
}));

const Heading = styled("div")(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "40px",
  fontFamily: "Space Mono",
  fontWeight: "700",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "30px",
  },
}));

const SubHeading = styled("div")(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "16px",
  marginTop: "15px",
  fontFamily: "Open Sans",
  fontWeight: "400",
}));

const Banner: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [bannerSize, setBannerSize] = useState({ width: 0, height: 0 });
  const [isPoppersVisible, setIsPoppersVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      let banner = document.getElementById("banner");
      let size = banner?.getBoundingClientRect();
      if (size) {
        setBannerSize({
          width: size.width,
          height: size.height,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let banner = document.getElementById("banner");
    let size = banner?.getBoundingClientRect();
    if (size) {
      setBannerSize({
        width: size.width,
        height: size.height,
      });
    }

    setTimeout(() => {
      setIsPoppersVisible(false);
    }, 1000);
  }, []);

  return (
    <Container id="banner">
      <Confetti
        width={bannerSize.width}
        height={isMobile ? bannerSize.height - 25 : bannerSize.height}
        numberOfPieces={isPoppersVisible ? 500 : 0}
      ></Confetti>
      <div
        style={{ textAlign: "left", margin: isMobile ? "15px" : "21px 18px" }}
      >
        <Heading>CONGRATULATIONS!</Heading>
        <SubHeading>
          Your NFT #271 and #283 have won our latest giveaway
        </SubHeading>
      </div>

      <div
        style={{
          textAlign: "right",
          margin: isMobile ? "15px 15px 15px auto" : "21px 18px 21px auto",
        }}
      >
        <Heading>120 USDC + 2 AVAX</Heading>
        <SubHeading>has been delivered to your wallet</SubHeading>
      </div>
    </Container>
  );
};

export default Banner;
