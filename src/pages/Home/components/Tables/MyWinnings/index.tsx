import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const MyWinnings: FC = () => {
  return (
    <TableContainer>
      <TableRowHeader>
        <Th>Date</Th>
        <Th>Rank</Th>
        <Th>NFT</Th>
        <Th>Award</Th>
      </TableRowHeader>
      <TableRow>
        <Td>23-08-22</Td>
        <Td>1</Td>
        <Td>271</Td>
        <Td>120 USDC</Td>
      </TableRow>
      <TableRow>
        <Td>23-08-22</Td>
        <Td>2</Td>
        <Td>283</Td>
        <Td>2 AVAX</Td>
      </TableRow>
      <TableRow>
        <Td>23-08-22</Td>
        <Td>3</Td>
        <Td>284</Td>
        <Td>1 AVAX</Td>
      </TableRow>
    </TableContainer>
  );
};

export default MyWinnings;
