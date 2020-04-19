import * as React from "react";
import { useSelector } from "react-redux";
import { ListModel } from "types/ListModel";
import { RootState } from "types/RootState";
import { Box } from "@material-ui/core";
import List from "components/List";

interface MainProps {
  items: ListModel[];
  fetching: boolean;
}

const Main: React.FC<MainProps> = ({ items, fetching }) => (
  <Box
    component="main"
    mt={8}
    p={2}
    width="100%"
    height="calc(100vh - 64px)"
    boxSizing="border-box"
    display="flex"
  >
    {items.map((item) => (
      <List
        id={item.id}
        issues={item.issues}
        title={item.title}
        key={item.id}
      />
    ))}
  </Box>
);

export default function () {
  const { items, fetching } = useSelector((state: RootState) => state.list);

  return <Main items={items} fetching={fetching} />;
}
