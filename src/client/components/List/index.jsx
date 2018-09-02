import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import connector from './connector';
import ListEntry from '../ListEntry';

function List({entries, onCreate}) {
  return <div><Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ФИО</TableCell>
          <TableCell>Дата рождения</TableCell>
          <TableCell>Адрес</TableCell>
          <TableCell>Телефон</TableCell>
          <TableCell>Действия</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map(function(id){
          return <ListEntry key={id} id={id}/>
        })}
      </TableBody>
    </Table>
  </Paper>
  <Button variant="fab" color="primary" onClick={onCreate}>
        <AddIcon />
      </Button>
  </div>
  
}

export default connector(List);