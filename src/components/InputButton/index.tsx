import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, TextField, Paper, makeStyles } from "@material-ui/core";
import { IssueModel } from "types/IssueModel";

const useStyles = makeStyles({
  button: {
    width: "100%",
  },
});

const InputButton: React.FC<{ save: (v: IssueModel) => void }> = ({ save }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  const handleKeyPress = (e: any) => {
    if (e.charCode === 13) {
      if (value.trim()) {
        save({
          id: Date.now(),
          name: value.trim(),
        });
      }

      handleClose();
    }
  };

  return (
    <Box mb={2}>
      <Paper>
        {open ? (
          <Box p={1} pb={0}>
            <TextField
              fullWidth
              autoFocus
              onBlur={handleClose}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
          </Box>
        ) : (
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={handleOpen}
          >
            Добавить
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default InputButton;
