import React from "react";
import { Box, Typography, IconButton, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch } from "react-redux";
import { deleteIssue } from "store/lists/actions";

interface IssueProps {
  id: number;
  name: string;
  listId: number;
  deleteIssue: () => void;
}

const Issue: React.FC<IssueProps> = ({ name, deleteIssue }) => {
  return (
    <Box mb={2}>
      <Paper>
        <Box
          p={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="bold"
        >
          <Typography>{name}</Typography>
          <IconButton size="small" onClick={deleteIssue}>
            <ClearIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default function (props: Pick<IssueProps, "id" | "listId" | "name">) {
  const dispatch = useDispatch();

  return (
    <Issue
      {...props}
      deleteIssue={() => dispatch(deleteIssue(props.id, props.listId))}
    />
  );
}
