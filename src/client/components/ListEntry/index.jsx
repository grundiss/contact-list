import * as React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import moment from "moment";
import connector from "./connector";

function ListEntry({ entry, onDelete, onEdit }) {
  return (
    <TableRow>
      <TableCell>{entry.name}</TableCell>
      <TableCell>{moment(entry.birthDate).format("DD.MM.YYYY")}</TableCell>
      <TableCell>
        {entry.city}, {entry.address}
      </TableCell>
      <TableCell>{entry.phone}</TableCell>
      <TableCell>
      <IconButton onClick={onEdit}>
          <CreateIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default connector(ListEntry);
