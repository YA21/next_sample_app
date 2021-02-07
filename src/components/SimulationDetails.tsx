import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useInvestAmountState } from '../ducks/investAmount/selectors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 850,
    margin: 'auto',
  },
});

const SimulationDetails: React.FC = () => {
  const state = useInvestAmountState().investAmount;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.investAmountArray.map((result) => (
            <TableRow key={result.date}>
              <TableCell>{result.date}</TableCell>
              <TableCell>{result.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimulationDetails;