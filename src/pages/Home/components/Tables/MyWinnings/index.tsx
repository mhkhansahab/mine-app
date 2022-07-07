import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const MyWinnings: FC = () => {
  let data = [
    {
      date: "23-08-22",
      rank: "1",
      nft: "271",
      award: "120 USDC",
    },
    {
      date: "23-08-22",
      rank: "1",
      nft: "271",
      award: "120 USDC",
    },
    {
      date: "23-08-22",
      rank: "1",
      nft: "271",
      award: "120 USDC",
    },
  ];

  return (
    <TableContainer>
      <TableRowHeader>
        <Th style={{ textAlign: "left" }}>Date</Th>
        <Th style={{ textAlign: "center" }}>Rank</Th>
        <Th style={{ textAlign: "center" }}>NFT</Th>
        <Th style={{ textAlign: "right" }}>Award</Th>
      </TableRowHeader>

      {data.map((e, i) => {
        return (
          <TableRow isLastRow={data.length === i + 1 ? true : false}>
            <Td style={{ textAlign: "left" }}>{e.date}</Td>
            <Td style={{ textAlign: "center" }}>{e.rank}</Td>
            <Td style={{ textAlign: "center" }}>{e.nft}</Td>
            <Td style={{ textAlign: "right" }}>{e.award}</Td>
          </TableRow>
        );
      })}
    </TableContainer>
  );
};

export default MyWinnings;
