import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const LatestWinners: FC = () => {
  let data = [
    {
      nft: "271",
      award: "2 days yield",
    },
    {
      nft: "271",
      award: "2 AVAX",
    },
    {
      nft: "271",
      award: "2 AVAX",
    },
  ];

  return (
    <TableContainer>
      <TableRowHeader>
        <Th style={{ textAlign: "left" }}>&nbsp;</Th>
        <Th style={{ textAlign: "center" }}>NFT</Th>
        <Th style={{ textAlign: "right" }}>Award</Th>
      </TableRowHeader>

      {data.map((e, i) => {
        return (
          <TableRow isLastRow={data.length === i + 1 ? true : false}>
            <Td style={{ textAlign: "left" }}>{i + 1}</Td>
            <Td style={{ textAlign: "center" }}>{e.nft}</Td>
            <Td style={{ textAlign: "right" }}>{e.award}</Td>
          </TableRow>
        );
      })}
    </TableContainer>
  );
};

export default LatestWinners;
