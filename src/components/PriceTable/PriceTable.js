import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const PriceTable = ({ side, head, rows }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <StyledTableCell align="center" colSpan={2}>
            {side}
          </StyledTableCell>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {head.map((cell) => (
              <StyledTableCell align="center">{cell}</StyledTableCell>
            ))}
          </StyledTableRow>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {row.map((column) => (
                <StyledTableCell align="center">{column}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
