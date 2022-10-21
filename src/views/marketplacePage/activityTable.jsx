import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Link from '@mui/material/Link';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

import GradientBox from 'components/gradientBox';

import { marketTableData } from 'assets/mockdata/marketTableData';
import styles from 'assets/jss/views/marketplacePageStyles';
const useStyles = makeStyles(styles);

const ActivityTable = () => {

  const classes = useStyles();

  return (
    <GradientBox borderWidth='large'>
      <Box className={classes.activityTable}>
        <TableContainer>
          <Table sx={{ minWidth: 900 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Request Key</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Buyer</TableCell>
                <TableCell>Seller</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marketTableData.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Link href='/'>{row.requestKey}</Link>
                  </TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <Link href='/'>{row.buyer}</Link>
                  </TableCell>
                  <TableCell>
                    <Link href='/'>{row.seller}</Link>
                  </TableCell>
                  <TableCell>
                    <Link href='/'>{row.time}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </GradientBox>
  )
}

export default ActivityTable;
