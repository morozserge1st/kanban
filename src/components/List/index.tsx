import React from "react";
import {
  Box,
  Paper,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IssueModel } from "types/IssueModel";
import Issue from "components/Issue";
import InputButton from "components/InputButton";
import { useDispatch } from "react-redux";
import { deleteList, addIssue } from "store/lists/actions";

interface ListProps {
  id: number;
  issues: IssueModel[];
  title: string;
  deleteList: () => void;
  addIssue: (v: IssueModel) => void;
}

const useStyles = makeStyles({
  list: {
    width: 300,
    height: "100%",
    marginRight: 20,
  },
});

const List: React.FC<ListProps> = ({
  id,
  issues,
  title,
  deleteList,
  addIssue,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.list} elevation={5}>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        boxSizing="border-box"
      >
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="bold"
        >
          <Typography>{title}</Typography>
          <IconButton size="small" onClick={deleteList}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
        <Box overflow="auto" flex={1} pl={2} pr={1}>
          {issues.map((i) => (
            <Issue key={i.id} name={i.name} listId={id} id={i.id} />
          ))}
          <InputButton save={addIssue} />
        </Box>
      </Box>
    </Paper>
  );
};

export default function (props: Pick<ListProps, "id" | "issues" | "title">) {
  const dispath = useDispatch();

  return (
    <List
      deleteList={() => dispath(deleteList(props.id))}
      {...props}
      addIssue={(v: IssueModel) => dispath(addIssue(v, props.id))}
    />
  );
}
