import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//MATERIAL UI EXAMPLE

const useStyles = makeStyles({
   table: {
      minWidth: 650,
      maxWidth: 1000,
      marginLeft: 400,
      marginTop: 100,
   },
});

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData('Etävastaanotto', '1', '2.3.2021', 'Martti Martti', 'Valmis'),
   createData('Taivaltie 3', '1', '20.2.2021', 'Martti Martti', 'Jatkuu'),
   createData('Taivaltie 3', '1', '18.2.2021', 'Martti Martti', 'Jatkuu'),
   createData('Taivaltie 3', '1', '5.2.2021', 'Martti Martti', 'Jatkuu'),
   createData('Taivaltie 3', '1', '2.2.2021', 'Martti Martti', 'Jatkuu'),
]

export default function Content() {
   const classes = useStyles();

   return (
      <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Paikka</TableCell>
                  <TableCell align="right">Tarkoitus</TableCell>
                  <TableCell align="right">Pvm</TableCell>
                  <TableCell align="right">Käsittelijä</TableCell>
                  <TableCell align="right">Päätös</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.name}>
                     <TableCell component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell align="right">{row.calories}</TableCell>
                     <TableCell align="right">{row.fat}</TableCell>
                     <TableCell align="right">{row.carbs}</TableCell>
                     <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}