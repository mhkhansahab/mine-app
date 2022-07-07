import { FC } from "react";

import {
  TableContainer,
  TableRowHeader,
  Th,
  TableRow,
  Td,
} from "../Components/index";

const Hardware: FC = () => {
  let data = [
    {
      days: "8",
      model: "Kadena ASIC",
      value: "$6,000",
    },
    {
      days: "24",
      model: "GPU Rig",
      value: "$15,000",
    },
  ];
  return (
    <TableContainer>
      <TableRowHeader>
        <Th style={{ textAlign: "left" }}>Days in Service</Th>
        <Th style={{ textAlign: "center" }}>Model</Th>
        <Th style={{ textAlign: "right" }}>Approx. Value</Th>
      </TableRowHeader>

      {data.map((e, i) => {
        return (
          <TableRow isLastRow={data.length === i + 1 ? true : false}>
            <Td style={{ textAlign: "left" }}>{e.days}</Td>
            <Td style={{ textAlign: "center" }}>{e.model}</Td>
            <Td style={{ textAlign: "right" }}>{e.value}</Td>
          </TableRow>
        );
      })}
    </TableContainer>
  );
};

export default Hardware;
