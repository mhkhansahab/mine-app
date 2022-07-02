import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const Investments: FC = () => {
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
        <Td>1</Td>
        <Td>271</Td>
        <Td>2 days yield</Td>
      </TableRow>
      <TableRow>
        <Td>1</Td>
        <Td>271</Td>
        <Td>2 days yield</Td>
      </TableRow>
    </TableContainer>
  );
};

export default Investments;
