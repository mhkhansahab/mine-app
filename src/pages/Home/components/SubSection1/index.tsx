import { FC, useContext, useState, useEffect } from "react";
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
  const [timerDays, setTimerDays] = useState<any>(0);
  const [timerHours, setTimerHours] = useState<any>(0);
  const [timerMinutes, setTimerMinutes] = useState<any>(0);
  const [timerSeconds, setTimerSeconds] = useState<any>(0);

  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("Aug 23,2022 05:00:00 UTC").getTime();

    interval = setInterval(() => {
      const now: any = new Date().getTime();

      const distance: any = countDownDate - now;

      const days: any = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours: any = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes: any = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );
      const seconds: any = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        // turnOnMinting();
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <Container>
      <CustomHeading>Next Giveaway</CustomHeading>
      <CustomContainer>
        <GradientText>
          {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}
        </GradientText>
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
