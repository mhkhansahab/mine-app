import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const Hardware: FC = () => {
  return (
    <TableContainer>
      <TableRowHeader>
        <Th>Days in Service</Th>
        <Th>Model</Th>
        <Th>Approx. Value</Th>
      </TableRowHeader>
      <TableRow>
        <Td>8</Td>
        <Td>Kadena ASIC</Td>
        <Td>$6,000</Td>
      </TableRow>
      <TableRow>
        <Td>24</Td>
        <Td>GPU Rig</Td>
        <Td>$15,000</Td>
      </TableRow>
    </TableContainer>
  );
};

export default Hardware;
