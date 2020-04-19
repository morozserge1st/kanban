import React from "react";
import Header from "components/Header";
import Main from "components/Main/main";
import { Box } from "@material-ui/core";
import Dialog from "components/Dialog";

const App = () => (
  <Box display="flex">
    <Header />
    <Main />
    <Dialog />
  </Box>
);

export default App;
