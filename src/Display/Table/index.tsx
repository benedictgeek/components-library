import React, { FC, forwardRef, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import TableCell, {
  tableCellClasses,
  TableCellProps,
} from '@mui/material/TableCell';
import TableContainer, {
  TableContainerProps,
} from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export interface CellProps extends TableCellProps {
  label?: ReactNode;
  value?: any;
}

export interface DataProps {
  cells: CellProps[];
  TableRowProps?: TableRowProps;
}

export interface TableProps {
  headers?: CellProps[];
  data?: DataProps[];
  TableContainerProps?: TableContainerProps;
  TableProps?: MuiTableProps;
  TableHeadProps?: TableHeadProps;
  TableHeaderRowProps?: TableRowProps;
  TableBodyProps?: TableBodyProps;
}

export const Table: FC<TableProps> = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      headers,
      data,
      TableContainerProps,
      TableProps,
      TableHeadProps,
      TableHeaderRowProps,
      TableBodyProps,
    },
    ref
  ) => {
    const [headerUID] = useState(() => uuidv4());
    const [dataRowUID] = useState(() => uuidv4());

    return (
      <TableContainer ref={ref} component={Paper} {...TableContainerProps}>
        <MuiTable sx={{ minWidth: 700 }} {...TableProps}>
          <TableHead {...TableHeadProps}>
            <TableRow {...TableHeaderRowProps}>
              {headers?.map(({ label, value, ...others }, index) => {
                return (
                  <StyledTableCell
                    key={index + '-' + headerUID}
                    align="center"
                    {...others}
                  >
                    {label}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody {...TableBodyProps}>
            {data?.map(({ cells, TableRowProps }, index) => {
              const rowKey = index + '-' + dataRowUID;
              return (
                <StyledTableRow key={rowKey} {...TableRowProps}>
                  {cells.map(({ label, value, ...others }, index) => {
                    return (
                      <StyledTableCell
                        key={index + '-' + rowKey}
                        align="center"
                        component={index == 0 ? 'th' : undefined}
                        scope={index == 0 ? 'row' : undefined}
                        {...others}
                      >
                        {label}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
    );
  }
);
