import React from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell, TableBody, Typography} from '@mui/material'

function createData(name, age, ID) {
    return { name, age, ID };
  }
  
  const rows = [
    createData('Ajay', 21, 12),
    createData('Adithya', 20, 13),
    createData('Aswin', 20, 6),
  ];
const TableC = () => {
  return (
    <div>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><Typography>Name</Typography></TableCell>
                    <TableCell><Typography>Age</Typography></TableCell>
                    <TableCell><Typography>ID</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Ajay</TableCell>
                <TableCell>21</TableCell>
                <TableCell>12</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell>Adithya</TableCell>
                <TableCell>20</TableCell>
                <TableCell>13</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell>Aswin</TableCell>
                <TableCell>20</TableCell>
                <TableCell>6</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default TableC