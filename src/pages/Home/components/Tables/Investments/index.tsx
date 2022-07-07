import { FC } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  TableContainer,
  AccordionTableRowHeader,
  AccordionTableRow,
  Th,
  Td,
} from "../Components/index";

const Investments: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [tilesData, setTilesData] = React.useState<any>([
    {
      option1: "VaporNodes",
      option2: "420,000 VPND",
      detail:
        " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
    },
    {
      option1: "Hive",
      option2: "2 Worker Bees",
      detail:
        " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
    },
    {
      option1: "Hive",
      option2: "1 Guardian Bee",
      detail:
        " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
    },
    {
      option1: "Hive",
      option2: "1 Baby Bear",
      detail:
        " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
    },
  ]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <TableContainer>
      <AccordionTableRowHeader>
        <Th style={{ textAlign: "left" }}>Protocol</Th>
        <Th style={{ textAlign: "right" }}>Investment</Th>
      </AccordionTableRowHeader>

      {tilesData
        ? tilesData?.map((tile: any, index: number) => {
            return (
              <AccordionTableRow
                isLastRow={tilesData?.length === index + 1 ? true : false}
              >
                <Accordion
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  style={{
                    background: "#0B0D21",
                    color: "#9CA3AF",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#9CA3AF" }} />}
                    aria-controls={`panel${index + 1}bh-content`}
                    id={`panel${index + 1}bh-header`}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Td style={{ textAlign: "left", width: "150px" }}>
                        {tile?.option1}
                      </Td>
                      <Td style={{ textAlign: "right", width: "150px" }}>
                        {tile?.option2}
                      </Td>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "14px" }}>
                      {tile?.detail}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </AccordionTableRow>
            );
          })
        : null}
    </TableContainer>
  );
};

export default Investments;
