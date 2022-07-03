import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const LatestWinners: FC = () => {
  return (
    <TableContainer>
      <TableRowHeader>
        <Th></Th>
        <Th>NFT</Th>
        <Th>Award</Th>
      </TableRowHeader>
      <TableRow>
        <Td>1</Td>
        <Td>271</Td>
        <Td>2 days yield</Td>
      </TableRow>
      <TableRow>
        <Td>2</Td>
        <Td>283</Td>
        <Td>2 AVAX</Td>
      </TableRow>
      <TableRow>
        <Td>3</Td>
        <Td>236</Td>
        <Td>1 AVAX</Td>
      </TableRow>
    </TableContainer>
  );
};

export default LatestWinners;
