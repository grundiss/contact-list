import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import connector from "./connector";

function EditModal({ isOpen, entry, errors, onChange, onClose, onSave }) {
  return (
    <Dialog open={isOpen} onClose={onClose} root={{ width: 400 }}>
      <DialogTitle id="simple-dialog-title">Редактирование</DialogTitle>
      <DialogContent>
        <TextField
          error={errors.emptyName || errors.tooLongName}
          helperText={
            (errors.emptyName && "Имя не может быть пустым") ||
            (errors.tooLongName && "Максимальная длина имени - 150 символов") ||
            ""
          }
          label="ФИО"
          value={entry.name}
          onChange={onChange("name")}
          margin="normal"
          fullWidth
        />
        <TextField
          error={errors.invalidDate}
          helperText={(errors.invalidDate && "Некоректная дата") || ""}
          label="Дата рождения"
          value={entry.birthDate}
          onChange={onChange("birthDate")}
          margin="normal"
          fullWidth
        />
        <TextField
          error={errors.emptyCity}
          helperText={(errors.emptyCity && "Город не может быть пустым") || ""}
          label="Город"
          value={entry.city}
          onChange={onChange("city")}
          margin="normal"
          fullWidth
        />
        <TextField
          error={errors.emptyAddress}
          helperText={
            (errors.emptyAddress && "Адрес не может быть пустым") || ""
          }
          label="Адрес"
          value={entry.address}
          onChange={onChange("address")}
          margin="normal"
          fullWidth
        />
        <TextField
          error={errors.invalidPhone}
          helperText={(errors.invalidPhone && "Неверно указан телефон") || ""}
          label="Телефон"
          value={entry.phone}
          onChange={onChange("phone")}
          margin="normal"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onSave} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connector(EditModal);
