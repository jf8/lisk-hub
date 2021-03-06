import React from 'react';
import { themr } from 'react-css-themr';
import { Table as ToolBoxTable, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import tableTheme from './css/theme.css';

const MTable = props => <ToolBoxTable {...props} theme={props.theme}/>;
const TBTable = themr('table', tableTheme)(MTable);

export {
  TBTable,
  TableRow as TBTableRow,
  TableCell as TBTableCell,
  TableHead as TBTableHead,
};
