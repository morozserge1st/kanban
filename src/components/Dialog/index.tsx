import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  Box,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "types/RootState";
import { closeDialog } from "store/dialog/actions";
import { addList } from "store/lists/actions";
import { ListModel } from "types/ListModel";

interface DialogProps {
  open: boolean;
  closeDialog: () => void;
  addList: (v: ListModel) => void;
}

const ListDialog: React.FC<DialogProps> = ({ open, closeDialog, addList }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClose = () => {
    setValue("");
    setError("");
    closeDialog();
  };

  const handleSubmit = () => {
    if (!value.trim()) {
      setError("Обязательное поле");
    } else {
      addList({
        id: Date.now(),
        title: value.trim(),
        issues: [],
      });
      handleClose();
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={handleClose}>
      <DialogTitle>Создание листа</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Название листа"
          value={value}
          variant="outlined"
          onChange={handleChange}
          error={!!error}
          helperText={error}
        />
      </DialogContent>
      <DialogActions>
        <Box p={2}>
          <Box pr={2} display="inline">
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Отменить
            </Button>
          </Box>
          <Button variant="contained" onClick={handleSubmit}>
            Сохранить
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default function () {
  const dispatch = useDispatch();
  const { open } = useSelector((s: RootState) => s.dialog);

  return (
    <ListDialog
      open={open}
      closeDialog={() => dispatch(closeDialog())}
      addList={(v: ListModel) => dispatch(addList(v))}
    />
  );
}
